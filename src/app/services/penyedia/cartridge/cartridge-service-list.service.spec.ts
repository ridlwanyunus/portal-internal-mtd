import { TestBed } from '@angular/core/testing';

import { CartridgeServiceListService } from './cartridge-service-list.service';

describe('CartridgeServiceListService', () => {
  let service: CartridgeServiceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartridgeServiceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
