import { TestBed } from '@angular/core/testing';

import { PrinterCartridgeVerifyServiceService } from './printer-cartridge-verify-service.service';

describe('PrinterCartridgeVerifyServiceService', () => {
  let service: PrinterCartridgeVerifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterCartridgeVerifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
