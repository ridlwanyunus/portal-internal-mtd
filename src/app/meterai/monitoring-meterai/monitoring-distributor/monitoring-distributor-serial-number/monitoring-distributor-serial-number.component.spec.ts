import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringDistributorSerialNumberComponent } from './monitoring-distributor-serial-number.component';

describe('MonitoringDistributorSerialNumberComponent', () => {
  let component: MonitoringDistributorSerialNumberComponent;
  let fixture: ComponentFixture<MonitoringDistributorSerialNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringDistributorSerialNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringDistributorSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
