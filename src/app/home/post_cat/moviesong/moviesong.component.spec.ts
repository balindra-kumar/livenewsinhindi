import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesongComponent } from './moviesong.component';

describe('MoviesongComponent', () => {
  let component: MoviesongComponent;
  let fixture: ComponentFixture<MoviesongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
