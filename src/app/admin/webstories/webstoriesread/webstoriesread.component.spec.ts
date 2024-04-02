import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstoriesreadComponent } from './webstoriesread.component';

describe('WebstoriesreadComponent', () => {
  let component: WebstoriesreadComponent;
  let fixture: ComponentFixture<WebstoriesreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebstoriesreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebstoriesreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
