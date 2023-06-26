import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbusComponent } from './adminbus.component';

describe('AdminbusComponent', () => {
  let component: AdminbusComponent;
  let fixture: ComponentFixture<AdminbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
