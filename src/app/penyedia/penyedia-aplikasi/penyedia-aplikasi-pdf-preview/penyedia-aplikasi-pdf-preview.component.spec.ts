import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaAplikasiPdfPreviewComponent } from './penyedia-aplikasi-pdf-preview.component';

describe('PenyediaAplikasiPdfPreviewComponent', () => {
  let component: PenyediaAplikasiPdfPreviewComponent;
  let fixture: ComponentFixture<PenyediaAplikasiPdfPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaAplikasiPdfPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaAplikasiPdfPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
