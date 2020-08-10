import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent
      ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});