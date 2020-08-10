import {Component, Input, OnInit} from '@angular/core';
import {person} from './models/person-model';
import {ContactListService} from '../../services/contact-list-service.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  @Input() isPersonSelected = false;
  @Input() rows: any;
  @Input() columns: any;

  constructor(
      private _contactListService: ContactListService,
      private _router: Router
  ) { }

  ngOnInit() {
  }

  public editPerson(personSelected: person) {
    this._contactListService.setSelectedPerson(personSelected);
    this._router.navigateByUrl('/edit');
  }

  public deletePerson(personSelected: person) {
   this._contactListService.remove(personSelected.id);
    Swal.fire('O conato foi removido com sucesso!', '','success');
  }

}
