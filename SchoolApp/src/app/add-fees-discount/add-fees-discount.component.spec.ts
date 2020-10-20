import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeesDiscountComponent } from './add-fees-discount.component';

describe('AddFeesDiscountComponent', () => {
  let component: AddFeesDiscountComponent;
  let fixture: ComponentFixture<AddFeesDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeesDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeesDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
