import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterAddComponent } from './printer-add.component';

describe('PrinterAddComponent', () => {
  let component: PrinterAddComponent;
  let fixture: ComponentFixture<PrinterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrinterAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
