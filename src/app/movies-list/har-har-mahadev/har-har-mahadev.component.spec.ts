import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarHarMahadevComponent } from './har-har-mahadev.component';

describe('HarHarMahadevComponent', () => {
  let component: HarHarMahadevComponent;
  let fixture: ComponentFixture<HarHarMahadevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarHarMahadevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarHarMahadevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
