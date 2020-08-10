import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableListComponent} from './table-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import {ContactListService} from '../../services/contact-list-service.service';
import {MatTableModule} from '@angular/material/table';
import {RouterTestingModule} from '@angular/router/testing';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        RouterTestingModule
      ],
      declarations: [
        TableListComponent
      ],
      providers: [
        ContactListService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
