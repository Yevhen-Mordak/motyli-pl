import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaComponent } from './farma.component';

describe('FarmaComponent', () => {
  let component: FarmaComponent;
  let fixture: ComponentFixture<FarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
