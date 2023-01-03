import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenfitsOfWatchingMoviesComponent } from './benfits-of-watching-movies.component';

describe('BenfitsOfWatchingMoviesComponent', () => {
  let component: BenfitsOfWatchingMoviesComponent;
  let fixture: ComponentFixture<BenfitsOfWatchingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenfitsOfWatchingMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenfitsOfWatchingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
