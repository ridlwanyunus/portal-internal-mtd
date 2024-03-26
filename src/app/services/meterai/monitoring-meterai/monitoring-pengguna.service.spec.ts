import { TestBed } from '@angular/core/testing';

import { MonitoringPenggunaService } from './monitoring-pengguna.service';

describe('MonitoringPenggunaService', () => {
  let service: MonitoringPenggunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringPenggunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
