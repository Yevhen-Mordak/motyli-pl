import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotyleComponent } from './motyle.component';

describe('MotyleComponent', () => {
  let component: MotyleComponent;
  let fixture: ComponentFixture<MotyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
