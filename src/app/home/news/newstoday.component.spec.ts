import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstodayComponent } from './newstoday.component';

describe('NewstodayComponent', () => {
  let component: NewstodayComponent;
  let fixture: ComponentFixture<NewstodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
