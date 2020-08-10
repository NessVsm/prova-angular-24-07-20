import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import {ContactListService} from '../../services/contact-list-service.service';
import {MatTableModule} from '@angular/material/table';
import {RouterTestingModule} from '@angular/router/testing';
import {CepService} from '../../cep.service';
import {FormBuilder} from '@angular/forms';
import {EditContactContainerComponent} from './edit-contact-container.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('EditContactContainerComponent', () => {
  let component: EditContactContainerComponent;
  let fixture: ComponentFixture<EditContactContainerComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        RouterTestingModule
      ],
      declarations: [
        EditContactContainerComponent
      ],
      providers: [
        ContactListService,
        CepService,
        HttpClient,
        HttpHandler,
        FormBuilder
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(EditContactContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});