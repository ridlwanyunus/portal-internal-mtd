import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringDistributorDetailsComponent } from './monitoring-distributor-details.component';

describe('MonitoringDistributorDetailsComponent', () => {
  let component: MonitoringDistributorDetailsComponent;
  let fixture: ComponentFixture<MonitoringDistributorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringDistributorDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringDistributorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
