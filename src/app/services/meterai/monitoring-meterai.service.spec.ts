import { TestBed } from '@angular/core/testing';

import { MonitoringMeteraiService } from './monitoring-meterai.service';

describe('MonitoringMeteraiService', () => {
  let service: MonitoringMeteraiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringMeteraiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
