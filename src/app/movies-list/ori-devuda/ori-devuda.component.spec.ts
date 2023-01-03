import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriDevudaComponent } from './ori-devuda.component';

describe('OriDevudaComponent', () => {
  let component: OriDevudaComponent;
  let fixture: ComponentFixture<OriDevudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriDevudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriDevudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
