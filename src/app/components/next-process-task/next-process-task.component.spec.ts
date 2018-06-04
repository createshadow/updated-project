import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextProcessTaskComponent } from './next-process-task.component';

describe('NextProcessTaskComponent', () => {
  let component: NextProcessTaskComponent;
  let fixture: ComponentFixture<NextProcessTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextProcessTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextProcessTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
