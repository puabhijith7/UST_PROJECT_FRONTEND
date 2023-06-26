import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollimageComponent } from './scrollimage.component';

describe('ScrollimageComponent', () => {
  let component: ScrollimageComponent;
  let fixture: ComponentFixture<ScrollimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
