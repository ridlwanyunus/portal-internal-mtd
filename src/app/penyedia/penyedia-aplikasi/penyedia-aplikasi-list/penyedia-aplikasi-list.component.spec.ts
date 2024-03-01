import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaAplikasiListComponent } from './penyedia-aplikasi-list.component';

describe('PenyediaAplikasiListComponent', () => {
  let component: PenyediaAplikasiListComponent;
  let fixture: ComponentFixture<PenyediaAplikasiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaAplikasiListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaAplikasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
