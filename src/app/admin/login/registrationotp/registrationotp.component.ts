import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrationotp',
  standalone: true,
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './registrationotp.component.html',
  styleUrl: './registrationotp.component.css'
})
export class RegistrationotpComponent {
  
  user_code:any=sessionStorage.getItem("user_code");
  userUrl = `https://hinditerm.com/demo/post/user-otp.php?user_code=${this.user_code}`;

  
//  userUpadeVarifiedUrl = `http://balindra.com/post/user-varification.php/?user_code=${this.user_code}`
  
    constructor(private http:HttpClient, private router: Router){
    //  this.http.get(this.userUrl,{responseType:'json'}).subscribe((data:any)=>{
    //   this.userArray=data;
    //   console.log(this.userArray)
    //   let usr:any=sessionStorage.getItem("user_email");
    //   console.log(usr)
       
      
    //  })
    }
     
     
  //   }
  
  // emailVar:any = new FormGroup({
  //   otp_vari : new FormControl('')
  // })
  
  // get ctrl(){
  //   return this.emailVar.controls;
  // }
  
  
  
  // emailVarSubmit(){
  // if(this.ctrl.otp_vari.valid==false){
  // return alert('Please enter the OTP number take from on your email')
  // }
  // else{
   
  //   let usetData=sessionStorage.getItem("user_email");
  //   const matchedUser=this.userArray.find((x:any)=>{ 
  //   console.log("x data is ",x)
     
  //   return (x.user_email===usetData) && (x.otp===this.ctrl.otp_vari.value)
    
  // })
  //  if (matchedUser!=null && Object.keys(matchedUser).length>0)
  //      {
  //        sessionStorage.setItem("user",JSON.stringify(matchedUser));
        
  //        this.emailVar.controls['otp_vari'].setValue("Varified");
  //        const formData = new FormData();
  //        formData.append('otp_vari','Varified');
  //        this.http.post(this.userUpadeVarifiedUrl,formData).subscribe((updateValue:any)=>{
  //        console.log(updateValue,"data updated")
  //        alert("Congratulations Otp successfully Validate !")
  //        this.router.navigate(['/login']);
  //        })
         
  //       }
  //      else{
  //        alert("Oh! Please Right Otp Validate which you can get on you email");
  //      }
  



   
  emailVar:any = new FormGroup({
    otp_vari : new FormControl('')
  })
  
  get ctrl(){
    return this.emailVar.controls;
  }
user_id=sessionStorage.getItem('user_id');
  

  getUrl:any ="https://hinditerm.com/demo/post/user-otp.php";




   
  emailVarSubmit(){


    if(this.ctrl.otp_vari.valid==false){
      return alert('Please enter the OTP number take from on your email')
      }
    else{
      let formData = new FormData();
      formData.append('otp_vari',this.emailVar.controls['otp_vari'].value);
     // formData.append('user_id',this.user_code);


    this.http.post(this.userUrl,formData).subscribe((res:any)=>{
      console.log(res)
      sessionStorage.setItem('OTP Varified',res.message);
     

      let loginUser= sessionStorage.getItem('OTP Varified')
      let user_id=sessionStorage.getItem('user_code');

   
     if(loginUser=="OTP Varified" && user_id==res.user_code){
      alert("Your are successfully varified.");
      this.router.navigate(['/login'])

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
  

       
       
  
  
  
  
  
 
  
