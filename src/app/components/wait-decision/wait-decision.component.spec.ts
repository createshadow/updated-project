import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitDecisionComponent } from './wait-decision.component';

describe('WaitDecisionComponent', () => {
  let component: WaitDecisionComponent;
  let fixture: ComponentFixture<WaitDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
