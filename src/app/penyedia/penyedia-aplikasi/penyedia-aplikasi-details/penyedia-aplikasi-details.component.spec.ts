import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaAplikasiDetailsComponent } from './penyedia-aplikasi-details.component';

describe('PenyediaAplikasiDetailsComponent', () => {
  let component: PenyediaAplikasiDetailsComponent;
  let fixture: ComponentFixture<PenyediaAplikasiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaAplikasiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaAplikasiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
