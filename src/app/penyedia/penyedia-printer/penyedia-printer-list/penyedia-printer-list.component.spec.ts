import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaPrinterListComponent } from './penyedia-printer-list.component';

describe('PenyediaPrinterListComponent', () => {
  let component: PenyediaPrinterListComponent;
  let fixture: ComponentFixture<PenyediaPrinterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaPrinterListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaPrinterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
