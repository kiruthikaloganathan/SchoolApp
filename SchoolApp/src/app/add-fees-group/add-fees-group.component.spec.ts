import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeesGroupComponent } from './add-fees-group.component';

describe('AddFeesGroupComponent', () => {
  let component: AddFeesGroupComponent;
  let fixture: ComponentFixture<AddFeesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeesGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
