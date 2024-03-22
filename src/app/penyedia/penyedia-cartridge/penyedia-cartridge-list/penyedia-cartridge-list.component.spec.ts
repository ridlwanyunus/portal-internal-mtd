import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyediaCartridgeListComponent } from './penyedia-cartridge-list.component';

describe('PenyediaCartridgeListComponent', () => {
  let component: PenyediaCartridgeListComponent;
  let fixture: ComponentFixture<PenyediaCartridgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PenyediaCartridgeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenyediaCartridgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
