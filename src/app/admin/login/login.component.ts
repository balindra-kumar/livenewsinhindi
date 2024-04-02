import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private http: HttpClient, formBuilder: FormBuilder, private router: Router){}
  login:any = new FormGroup({
  user_email: new FormControl('',[Validators.required]),
  user_password: new FormControl('',[Validators.required])
  })

  get controlLogin(){
    return this.login.controls;
  }

products:any = [];
getUrl:any ="https://hinditerm.com/demo/post/user-auth.php";




   
  loginSubmit(){


     if(this.controlLogin.user_email.valid==false){
     return alert("Please Fill Email Id")
    }
    else if(this.controlLogin.user_password.valid==false){
      return alert("please fill the password")
    }
    else{
      let formData = new FormData();
      formData.append('user_email',this.login.controls['user_email'].value);
      formData.append('user_password', this.login.controls['user_password'].value);
      



   


    this.http.post(this.getUrl,formData).subscribe((res:any)=>{
     sessionStorage.setItem('Login successful',res.message);
     sessionStorage.setItem('authorized',res.authorized);
     sessionStorage.setItem('authorizedUserId', res.authorizedUserId);

     let loginUser= sessionStorage.getItem('Login successful');
     let authorized_user=sessionStorage.getItem('authorized');

     

    if(loginUser=='Not Authorized User' && authorized_user!=res.authorized){
      alert("You are not varified user")
      this.router.navigate(['/admin/otpvarification'])
    
    } if(loginUser=="Login successful" && authorized_user==res.authorized){
      alert("login successfully");
      this.router.navigate(['/admin/dashboard'])

    }else{
      alert("Please login with valid email id & password")
    }
  
   
    // const matchedUser=this.products.find((x:any)=>{ 
    //   return (x.user_email===this.controlLogin.email_id.value) && (x.user_password===this.controlLogin.password_id.value)})
    //  if (matchedUser!=null && Object.keys(matchedUser).length>0)
    //      {
    //        sessionStorage.setItem("user",JSON.stringify(matchedUser));
    //         this.Router1.navigateByUrl('dashboard');
    //         return alert("Thanks login Successfull");
            
    //      }
    //      else{
    //        alert("Please Correct the Right Information")
    //      }
    
   
  })
  }}
      
       

      }
  

