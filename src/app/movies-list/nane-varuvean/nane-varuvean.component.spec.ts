import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaneVaruveanComponent } from './nane-varuvean.component';

describe('NaneVaruveanComponent', () => {
  let component: NaneVaruveanComponent;
  let fixture: ComponentFixture<NaneVaruveanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaneVaruveanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaneVaruveanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
