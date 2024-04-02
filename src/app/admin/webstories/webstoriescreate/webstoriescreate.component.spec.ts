import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstoriescreateComponent } from './webstoriescreate.component';

describe('WebstoriescreateComponent', () => {
  let component: WebstoriescreateComponent;
  let fixture: ComponentFixture<WebstoriescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebstoriescreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebstoriescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
