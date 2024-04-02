import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstoriesupdateComponent } from './webstoriesupdate.component';

describe('WebstoriesupdateComponent', () => {
  let component: WebstoriesupdateComponent;
  let fixture: ComponentFixture<WebstoriesupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebstoriesupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebstoriesupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
