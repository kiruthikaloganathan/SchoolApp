import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFeesGroupComponent } from './table-fees-group.component';

describe('TableFeesGroupComponent', () => {
  let component: TableFeesGroupComponent;
  let fixture: ComponentFixture<TableFeesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFeesGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFeesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
