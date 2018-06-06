import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinancingDeclineComponent } from './refinancing-decline.component';

describe('RefinancingDeclineComponent', () => {
  let component: RefinancingDeclineComponent;
  let fixture: ComponentFixture<RefinancingDeclineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinancingDeclineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinancingDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
