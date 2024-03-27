import { TestBed } from '@angular/core/testing';

import { MonitoringSerialNumberService } from './monitoring-serial-number.service';

describe('MonitoringSerialNumberService', () => {
  let service: MonitoringSerialNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringSerialNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
