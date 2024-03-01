import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaCartridgeComponent } from './penyedia-cartridge.component';

describe('PenyediaCartridgeComponent', () => {
  let component: PenyediaCartridgeComponent;
  let fixture: ComponentFixture<PenyediaCartridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaCartridgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaCartridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
