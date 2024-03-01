import { TestBed } from '@angular/core/testing';

import { PenyediaAplikasiService } from './penyedia-aplikasi.service';

describe('PenyediaAplikasiService', () => {
  let service: PenyediaAplikasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenyediaAplikasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
