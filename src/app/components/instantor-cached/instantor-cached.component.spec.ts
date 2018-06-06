import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantorCachedComponent } from './instantor-cached.component';

describe('InstantorCachedComponent', () => {
  let component: InstantorCachedComponent;
  let fixture: ComponentFixture<InstantorCachedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantorCachedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantorCachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
