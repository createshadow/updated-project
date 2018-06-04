import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XsellDeclineComponent } from './xsell-decline.component';

describe('XsellDeclineComponent', () => {
  let component: XsellDeclineComponent;
  let fixture: ComponentFixture<XsellDeclineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XsellDeclineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XsellDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
