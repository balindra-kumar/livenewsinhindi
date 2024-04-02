import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otpvarification',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HttpClientModule, CommonModule, RouterLink],
  templateUrl: './otpvarification.component.html',
  styleUrl: './otpvarification.component.css'
})
export class OtpvarificationComponent {

  userUpadeVarifiedUrl = "https://hinditerm.com/demo/post/email-varification.php"

  constructor(private http: HttpClient, private router: Router) {

  }



  emailVar: any = new FormGroup({
    user_email: new FormControl('', [Validators.required])
  })


  emailVarSubmit() {
    if (this.emailVar.controls['user_email'].value.valid == false) {
      return alert('Please enter the Registration Email Id')
    }
    else {

      const formData = new FormData();
      formData.append('user_email', this.emailVar.controls['user_email'].value);
      this.http.post(this.userUpadeVarifiedUrl, formData).subscribe((response: any) => {
        if (response.status === true) {
          console.log("Data:", response.user_email, response.user_code);
          sessionStorage.setItem('user', response.user_email);
          sessionStorage.setItem('user_code', response.user_code);
          let userCode = sessionStorage.getItem('user_code');
          this.router.navigate([`registrationotp/${userCode}`]);
          alert(response.message);
        } else {
          alert(response.message);
        }

      })




    }


  }

}
