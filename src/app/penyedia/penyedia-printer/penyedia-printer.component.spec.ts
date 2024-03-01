import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaPrinterComponent } from './penyedia-printer.component';

describe('PenyediaPrinterComponent', () => {
  let component: PenyediaPrinterComponent;
  let fixture: ComponentFixture<PenyediaPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaPrinterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
