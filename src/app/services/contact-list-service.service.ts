import { Injectable } from '@angular/core';
import {ContactListResource} from '../resources/contact-list-resource';
import {person} from '../components/table-list/models/person-model';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {TABLE} from '../components/table-list/config/table-config';
@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  public personsArray = new BehaviorSubject<person[]>(TABLE.persons);
  public $personsArray = this.personsArray.asObservable().pipe(distinctUntilChanged());
  public selectedPerson: person;

  constructor(
      private _contactListResource: ContactListResource,
  ) { }



  public get() {
    return this._contactListResource.getItem('persons');
  }

  public save(person: person, title: string) {
    const mode = title.includes('Editar') ? 0 : 1;
    const personsArray = JSON.parse(this.get());

    if ( mode === 1) {
      const nextId = Number(personsArray.length) + 1;
      const personCopy = {
        ...person,
        id: nextId
      };
      personsArray.push(personCopy);
    } else {
      const personSelectedIndex = personsArray.findIndex(item => item.cpf === person.cpf);
      const id = Number(personSelectedIndex) + 1;
      const personCopy = {
        id,
        ...person
      };
      personsArray[personSelectedIndex] = personCopy;
    }

    this.updateList('persons', personsArray);

  }

  public remove(personSelectedId: number) {
    const personsArray = JSON.parse(this.get());
    const personSelectedIndex = personsArray.findIndex(person => person.id === personSelectedId);

    personsArray.splice(personSelectedIndex, 1);
    this.updateList('persons', personsArray);
  }

  public updateList(key: string, array: person[]) {
    this.personsArray.next(array);
    this._contactListResource.setItem(key, array);
  }

  public setSelectedPerson(personSelected: person) {
    this.selectedPerson = personSelected;
  }

  public getSelectedPerson() {
    return this.selectedPerson;
  }

}
