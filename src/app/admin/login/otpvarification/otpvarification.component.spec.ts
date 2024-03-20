import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpvarificationComponent } from './otpvarification.component';

describe('OtpvarificationComponent', () => {
  let component: OtpvarificationComponent;
  let fixture: ComponentFixture<OtpvarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpvarificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpvarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
