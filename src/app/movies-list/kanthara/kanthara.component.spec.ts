import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantharaComponent } from './kanthara.component';

describe('KantharaComponent', () => {
  let component: KantharaComponent;
  let fixture: ComponentFixture<KantharaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KantharaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
