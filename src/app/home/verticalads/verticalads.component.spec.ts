import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticaladsComponent } from './verticalads.component';

describe('VerticaladsComponent', () => {
  let component: VerticaladsComponent;
  let fixture: ComponentFixture<VerticaladsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticaladsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticaladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
