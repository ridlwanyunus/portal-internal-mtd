import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringMeteraiComponent } from './monitoring-meterai.component';

describe('MonitoringMeteraiComponent', () => {
  let component: MonitoringMeteraiComponent;
  let fixture: ComponentFixture<MonitoringMeteraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringMeteraiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringMeteraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
