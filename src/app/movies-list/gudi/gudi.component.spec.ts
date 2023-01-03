import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GudiComponent } from './gudi.component';

describe('GudiComponent', () => {
  let component: GudiComponent;
  let fixture: ComponentFixture<GudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GudiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
