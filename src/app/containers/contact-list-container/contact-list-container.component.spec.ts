import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import {ContactListService} from '../../services/contact-list-service.service';
import {ContactListContainerComponent} from './contact-list-container.component';
import {ContactListResource} from '../../resources/contact-list-resource';

describe('ContactListContainerComponent', () => {
  let component: ContactListContainerComponent;
  let fixture: ComponentFixture<ContactListContainerComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        ContactListContainerComponent
      ],
      providers: [
        ContactListService,
        ContactListResource
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(ContactListContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
