import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPenggunaListComponent } from './monitoring-pengguna-list.component';

describe('MonitoringPenggunaListComponent', () => {
  let component: MonitoringPenggunaListComponent;
  let fixture: ComponentFixture<MonitoringPenggunaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringPenggunaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringPenggunaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
