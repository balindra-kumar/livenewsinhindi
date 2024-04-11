import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstoriesComponent } from './webstories.component';

describe('WebstoriesComponent', () => {
  let component: WebstoriesComponent;
  let fixture: ComponentFixture<WebstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebstoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
