import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceOffersComponent } from './entrance-offers.component';

describe('EntranceOffersComponent', () => {
  let component: EntranceOffersComponent;
  let fixture: ComponentFixture<EntranceOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
