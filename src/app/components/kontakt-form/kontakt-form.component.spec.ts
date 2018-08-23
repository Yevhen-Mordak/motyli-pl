import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktFormComponent } from './kontakt-form.component';

describe('KontactFormComponent', () => {
  let component: KontaktFormComponent;
  let fixture: ComponentFixture<KontaktFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
