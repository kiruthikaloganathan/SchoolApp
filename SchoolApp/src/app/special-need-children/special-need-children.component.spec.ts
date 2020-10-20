import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialNeedChildrenComponent } from './special-need-children.component';

describe('SpecialNeedChildrenComponent', () => {
  let component: SpecialNeedChildrenComponent;
  let fixture: ComponentFixture<SpecialNeedChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialNeedChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialNeedChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
