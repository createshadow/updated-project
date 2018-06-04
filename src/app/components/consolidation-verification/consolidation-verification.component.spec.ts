import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidationVerificationComponent } from './consolidation-verification.component';

describe('ConsolidationVerificationComponent', () => {
  let component: ConsolidationVerificationComponent;
  let fixture: ComponentFixture<ConsolidationVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidationVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidationVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
