import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaPrinterCartridgeComponent } from './penyedia-printer-cartridge.component';

describe('PenyediaPrinterCartridgeComponent', () => {
  let component: PenyediaPrinterCartridgeComponent;
  let fixture: ComponentFixture<PenyediaPrinterCartridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaPrinterCartridgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaPrinterCartridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
