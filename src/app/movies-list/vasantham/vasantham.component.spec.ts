import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasanthamComponent } from './vasantham.component';

describe('VasanthamComponent', () => {
  let component: VasanthamComponent;
  let fixture: ComponentFixture<VasanthamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VasanthamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VasanthamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
