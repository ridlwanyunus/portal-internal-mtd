import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringDistributorComponent } from './monitoring-distributor.component';

describe('MonitoringDistributorComponent', () => {
  let component: MonitoringDistributorComponent;
  let fixture: ComponentFixture<MonitoringDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringDistributorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
