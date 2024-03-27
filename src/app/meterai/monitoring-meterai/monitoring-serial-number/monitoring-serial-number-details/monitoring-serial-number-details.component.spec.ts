import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringSerialNumberDetailsComponent } from './monitoring-serial-number-details.component';

describe('MonitoringSerialNumberDetailsComponent', () => {
  let component: MonitoringSerialNumberDetailsComponent;
  let fixture: ComponentFixture<MonitoringSerialNumberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringSerialNumberDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringSerialNumberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
