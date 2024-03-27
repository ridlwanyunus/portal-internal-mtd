import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringSerialNumberListComponent } from './monitoring-serial-number-list.component';

describe('MonitoringSerialNumberListComponent', () => {
  let component: MonitoringSerialNumberListComponent;
  let fixture: ComponentFixture<MonitoringSerialNumberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringSerialNumberListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringSerialNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
