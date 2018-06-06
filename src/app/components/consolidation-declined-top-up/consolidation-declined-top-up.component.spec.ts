import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidationDeclinedTopUpComponent } from './consolidation-declined-top-up.component';

describe('ConsolidationDeclinedTopUpComponent', () => {
  let component: ConsolidationDeclinedTopUpComponent;
  let fixture: ComponentFixture<ConsolidationDeclinedTopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidationDeclinedTopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidationDeclinedTopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
