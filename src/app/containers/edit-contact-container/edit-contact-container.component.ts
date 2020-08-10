import { Component, OnInit } from '@angular/core';
import {ContactListService} from "../../services/contact-list-service.service";
import {person} from "../../components/table-list/models/person-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CepService} from "../../cep.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-contact-container',
  templateUrl: './edit-contact-container.component.html',
  styleUrls: ['./edit-contact-container.component.scss']
})
export class EditContactContainerComponent implements OnInit {

  public personData: person;
  public editForm: FormGroup;
  public pageTitle: string;

  constructor(
      private _contactListService: ContactListService,
      private _fb: FormBuilder,
      private _router: Router,
      private _cepService: CepService
  ) { }

  ngOnInit() {
    this.setVars();
    this.getPageConfig();
  }

  public getPageConfig() {
    const page = this._router.url.includes('edit') ? 'Editar' : 'Adicionar';
    if ( page === 'Editar' ) {
      this.populateForm();
    }
    this.pageTitle = page + ' Contato';
  }

  public setVars() {
    this.personData = this._contactListService.getSelectedPerson();
    this.editForm = this._fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  public populateForm() {
    if (this.personData) {
      this.editForm.patchValue({
        name: this.personData.name,
        cpf: this.personData.cpf,
        phone: this.personData.phone,
        email: this.personData.email,
        cep: this.personData.cep,
        state: this.personData.state,
        city: this.personData.city,
        street: this.personData.street
      })
    }

  }


  public saveNewPerson() {
    const form = this.editForm;

    if (! form.valid) {
      Swal.fire('É necessário preencher todos os campos!');
      return;
    } else {
      this._contactListService.save(form.value, this.pageTitle);
      Swal.fire('O conato foi adicionado com sucesso!', '','success');
      this._router.navigateByUrl('/list');
    }

  }

  public getCompleteAddress() {
    const cep = this.editForm.get('cep').value;

    this._cepService.getCep(cep).subscribe(address => {
      if (address) {
        this.editForm.patchValue({
          street: address['logradouro'],
          city: address['localidade'],
          state: address['uf']
        })
      }
    },
    () => {
      alert('Erro ao buscar o cep');
      return;
    },
    () => {})
  }

  public goBackToList() {
    this._router.navigateByUrl('/list');
  }

}
