import { TestBed } from '@angular/core/testing';

import { PrinterServiceListService } from './printer-service-list.service';

describe('PrinterServiceListService', () => {
  let service: PrinterServiceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterServiceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
