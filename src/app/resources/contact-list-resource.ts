import { Injectable } from '@angular/core';
import {person} from '../components/table-list/models/person-model';

@Injectable({
    providedIn: 'root'
})
export class ContactListResource {

    constructor() { }

    public setItem(name: string, persons: Array<person>) {
        localStorage.setItem(name, JSON.stringify(persons));
    }

    public getItem(name: string) {
        return localStorage.getItem(name);
    }
}
