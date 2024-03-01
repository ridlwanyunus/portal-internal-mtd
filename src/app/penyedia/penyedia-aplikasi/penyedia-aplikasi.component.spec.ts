import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaAplikasiComponent } from './penyedia-aplikasi.component';

describe('PenyediaAplikasiComponent', () => {
  let component: PenyediaAplikasiComponent;
  let fixture: ComponentFixture<PenyediaAplikasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaAplikasiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaAplikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
