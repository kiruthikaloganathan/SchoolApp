import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDefineComponent } from './leave-define.component';

describe('LeaveDefineComponent', () => {
  let component: LeaveDefineComponent;
  let fixture: ComponentFixture<LeaveDefineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveDefineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
