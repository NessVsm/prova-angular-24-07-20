import { Component, OnInit } from '@angular/core';
import {TABLE} from '../../components/table-list/config/table-config';
import {person} from "../../components/table-list/models/person-model";
import {ContactListResource} from "../../resources/contact-list-resource";
import {ContactListService} from "../../services/contact-list-service.service";

@Component({
  selector: 'app-contact-list-container',
  templateUrl: './contact-list-container.component.html',
  styleUrls: ['./contact-list-container.component.scss']
})
export class ContactListContainerComponent implements OnInit {

  constructor(
      private _contactListResource: ContactListResource,
      private _contactListService: ContactListService
  ) { }

  public tableHeader = Array<string>();
  public tableData = Array<person>();

  ngOnInit() {
    this.setTableData();
    this.setVariables();
    this._contactListResource.setItem('persons', this.tableData);
  }

  public setVariables () {
    this.tableHeader = TABLE.header;
  }

  public setTableData() {
    this._contactListService.$personsArray.subscribe(data => {
      this.tableData = data;
    })
  }
}
