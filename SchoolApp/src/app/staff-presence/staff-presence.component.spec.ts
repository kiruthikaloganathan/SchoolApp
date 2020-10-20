import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPresenceComponent } from './staff-presence.component';

describe('StaffPresenceComponent', () => {
  let component: StaffPresenceComponent;
  let fixture: ComponentFixture<StaffPresenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffPresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
