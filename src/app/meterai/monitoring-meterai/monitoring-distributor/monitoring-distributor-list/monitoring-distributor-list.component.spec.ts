import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringDistributorListComponent } from './monitoring-distributor-list.component';

describe('MonitoringDistributorListComponent', () => {
  let component: MonitoringDistributorListComponent;
  let fixture: ComponentFixture<MonitoringDistributorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringDistributorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringDistributorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
