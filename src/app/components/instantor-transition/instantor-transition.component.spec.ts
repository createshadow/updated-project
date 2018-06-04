import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantorTransitionComponent } from './instantor-transition.component';

describe('InstantorTransitionComponent', () => {
  let component: InstantorTransitionComponent;
  let fixture: ComponentFixture<InstantorTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantorTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantorTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
