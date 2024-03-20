import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationotpComponent } from './registrationotp.component';

describe('RegistrationotpComponent', () => {
  let component: RegistrationotpComponent;
  let fixture: ComponentFixture<RegistrationotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationotpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
