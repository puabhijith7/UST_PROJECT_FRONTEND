import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Description1Component } from './description1.component';

describe('Description1Component', () => {
  let component: Description1Component;
  let fixture: ComponentFixture<Description1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Description1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Description1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
