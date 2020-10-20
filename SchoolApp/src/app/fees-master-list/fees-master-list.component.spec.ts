import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesMasterListComponent } from './fees-master-list.component';

describe('FeesMasterListComponent', () => {
  let component: FeesMasterListComponent;
  let fixture: ComponentFixture<FeesMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
