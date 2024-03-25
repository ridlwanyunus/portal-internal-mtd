import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPenggunaDetailsComponent } from './monitoring-pengguna-details.component';

describe('MonitoringPenggunaDetailsComponent', () => {
  let component: MonitoringPenggunaDetailsComponent;
  let fixture: ComponentFixture<MonitoringPenggunaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringPenggunaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringPenggunaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
