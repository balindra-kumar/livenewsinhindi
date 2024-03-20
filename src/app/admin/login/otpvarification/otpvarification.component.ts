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
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './otpvarification.component.html',
  styleUrl: './otpvarification.component.css'
})
export class OtpvarificationComponent {

  userArray:any=[];
  userUrl = "https://hinditerm.com/demo/post/user-read.php";
  
  sessionUserArrayData:any =[];
 


  userUpadeVarifiedUrl = "https://hinditerm.com/demo/post/email-varification.php?user_code="
 
    constructor(private http:HttpClient, private router: Router){
     this.http.get(this.userUrl,{responseType:'json'}).subscribe((data:any)=>{
      this.userArray=data;
      console.log(data)
      
     })
     
     
    }
  
  
  
  emailVar:any = new FormGroup({
    user_email : new FormControl('',[Validators.required])
  })
  
  get ctrl(){
    return this.emailVar.controls;
  }



  emailVarSubmit(){
    if(this.ctrl.user_email.valid==false){
    return alert('Please enter the Registration Email Id')
    }
    else{
  
      let user_code:any=sessionStorage.setItem("user_code",JSON.stringify(this.ctrl.user_email.value));
      let userEmailStore = sessionStorage.getItem("user_code");
      
      const matchedUser=this.userArray.find((x:any)=>{ 
        // console.log(x.user_email,usetData,x.otp,this.ctrl.validationTrue.value)
        return (x.user_email===this.ctrl.user_email.value)
        
      })
       if (matchedUser!=null && Object.keys(matchedUser).length>0)
           {
             sessionStorage.setItem("user",JSON.stringify(matchedUser));
             let usr:any=sessionStorage.getItem("user");
             this.sessionUserArrayData=JSON.parse(usr);
  
             sessionStorage.setItem('user_code',this.sessionUserArrayData.user_id)
             sessionStorage.setItem("user_email",this.sessionUserArrayData.user_email);
             
             //console.log(sessionStorage.getItem('user_code'))
             //console.log(sessionStorage.getItem('user_email'))
  
             this.emailVar.controls['user_email'].setValue('');
             const formData = new FormData();
             formData.append('user_email','');
             this.http.post(this.userUpadeVarifiedUrl+userEmailStore,formData).subscribe((updateValue:any)=>{
             console.log(updateValue,"data updated")
             alert("Otp Send on your email id [See All Mail/Spam Mail Category]")
             this.router.navigate([`registrationotp/${this.sessionUserArrayData.user_id}`])
             //this.router.navigate([`registrationotp/${user_id}`])
             })
             
            }
           else{
             alert("Oh! Please Right Otp Validate which you can get on you email");
           }
      
         
    
    }
    
    
    }


}