import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPenggunaComponent } from './monitoring-pengguna.component';

describe('MonitoringPenggunaComponent', () => {
  let component: MonitoringPenggunaComponent;
  let fixture: ComponentFixture<MonitoringPenggunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringPenggunaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringPenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
