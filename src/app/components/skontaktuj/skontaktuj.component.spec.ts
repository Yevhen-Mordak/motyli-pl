import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkontaktujComponent } from './skontaktuj.component';

describe('SkontaktujComponent', () => {
  let component: SkontaktujComponent;
  let fixture: ComponentFixture<SkontaktujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkontaktujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkontaktujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
