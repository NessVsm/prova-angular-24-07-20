import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import {HomeContainerComponent} from "./home-container.component";

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [
        HomeContainerComponent
      ],
      providers: [
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});