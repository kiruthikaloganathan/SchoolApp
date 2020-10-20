import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesDueComponent } from './fees-due.component';

describe('FeesDueComponent', () => {
  let component: FeesDueComponent;
  let fixture: ComponentFixture<FeesDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
