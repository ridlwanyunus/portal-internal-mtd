import { TestBed } from '@angular/core/testing';

import { MonitoringDistributorService } from './monitoring-distributor.service';

describe('MonitoringDistributorService', () => {
  let service: MonitoringDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
