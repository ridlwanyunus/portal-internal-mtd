import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaPrinterCartridgeListComponent } from './penyedia-printer-cartridge-list.component';

describe('PenyediaPrinterCartridgeListComponent', () => {
  let component: PenyediaPrinterCartridgeListComponent;
  let fixture: ComponentFixture<PenyediaPrinterCartridgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaPrinterCartridgeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaPrinterCartridgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
