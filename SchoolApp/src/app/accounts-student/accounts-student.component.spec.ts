import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsStudentComponent } from './accounts-student.component';

describe('AccountsStudentComponent', () => {
  let component: AccountsStudentComponent;
  let fixture: ComponentFixture<AccountsStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
