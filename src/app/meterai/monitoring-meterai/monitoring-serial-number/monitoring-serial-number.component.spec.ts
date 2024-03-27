import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringSerialNumberComponent } from './monitoring-serial-number.component';

describe('MonitoringSerialNumberComponent', () => {
  let component: MonitoringSerialNumberComponent;
  let fixture: ComponentFixture<MonitoringSerialNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringSerialNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
