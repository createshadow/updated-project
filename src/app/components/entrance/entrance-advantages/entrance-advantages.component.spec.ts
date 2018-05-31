import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceAdvantagesComponent } from './entrance-advantages.component';

describe('EntranceAdvantagesComponent', () => {
  let component: EntranceAdvantagesComponent;
  let fixture: ComponentFixture<EntranceAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
