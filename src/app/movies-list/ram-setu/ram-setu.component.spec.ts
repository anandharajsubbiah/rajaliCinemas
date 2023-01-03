import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamSetuComponent } from './ram-setu.component';

describe('RamSetuComponent', () => {
  let component: RamSetuComponent;
  let fixture: ComponentFixture<RamSetuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamSetuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamSetuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
