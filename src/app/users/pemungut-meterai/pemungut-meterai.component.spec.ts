import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemungutMeteraiComponent } from './pemungut-meterai.component';

describe('PemungutMeteraiComponent', () => {
  let component: PemungutMeteraiComponent;
  let fixture: ComponentFixture<PemungutMeteraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PemungutMeteraiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PemungutMeteraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
