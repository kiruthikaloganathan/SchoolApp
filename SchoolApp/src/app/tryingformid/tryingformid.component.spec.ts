import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryingformidComponent } from './tryingformid.component';

describe('TryingformidComponent', () => {
  let component: TryingformidComponent;
  let fixture: ComponentFixture<TryingformidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryingformidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryingformidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
