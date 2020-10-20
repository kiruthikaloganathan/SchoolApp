import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDirectoryComponent } from './personal-directory.component';

describe('PersonalDirectoryComponent', () => {
  let component: PersonalDirectoryComponent;
  let fixture: ComponentFixture<PersonalDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
