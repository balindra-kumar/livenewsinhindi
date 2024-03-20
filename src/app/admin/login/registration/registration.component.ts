import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  postUrl = "https://hinditerm.com/demo/post/registration.php"

   min:number = 10000000; // Smallest 8-digit number
   max:number = 99999999; // Largest 8-digit number
   user_code: any = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  
  emailRegEx =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
 
constructor(private http: HttpClient, formBuilder: FormBuilder, private router: Router,private titleService: Title, private metaService: Meta){
  
  
}

//Math.random().toString(16).slice(2)
ngOnInit(): void {
  this.titleService.setTitle("Registration Page");
  this.metaService.updateTag({ name: "description", content: "Registration page content" });

}

getFormattedDate() {
  let date = new Date()
  let fullDate =  date.toDateString();
  let day = fullDate.substring(0,3);
  let date1 = fullDate.substring(7,11);
  let m = fullDate.substring(3,7);
  let y = fullDate.substring(10,16);
  return date;
  }

registration:any = new FormGroup({
  
  user_first_name:new FormControl('',[Validators.required]),
  user_last_name:new FormControl('',[Validators.required]),
  user_img:new FormControl('',[Validators.required]),
  user_add:new FormControl('',[Validators.required]),
  user_gender:new FormControl('',[Validators.required]),
  user_state:new FormControl('',[Validators.required]),
  user_city:new FormControl('',[Validators.required]),
  user_dob:new FormControl('',[Validators.required]),
  user_pincode:new FormControl('',[Validators.required]),
  user_email:new FormControl('',[Validators.required,Validators.pattern(this.emailRegEx)]),
  user_password:new FormControl('',[Validators.required]),
  user_date	:new FormControl({value: this.getFormattedDate(), disabled:true}),
  user_id: new FormControl({value:this.user_code, disabled:true})
})

get emailid() {
   return this.registration.get('user_email');}

get ctrl(){
  return this.registration.controls;
  
 }

onSelectedFile(event:any){
  if (event.target.files && event.target.files.length > 0) {
    const img1 = (event.target.files[0] as File);
    this.registration.get('user_img').setValue(img1);
    
  }
}


registrationSubmit(){
 
  alert("hi");
if(this.ctrl.user_first_name.valid==false){
  return alert("first name required");
}
else if(this.ctrl.user_last_name.valid==false){
  return alert("Last name required");
}
else if(this.ctrl.user_img.valid==false){
  return alert("Profile Image Should be must");
}
else if(this.ctrl.user_add.valid==false){
  return alert("Address is required");
}
else if(this.ctrl.user_gender.valid==false){
  return alert("Gender is required");
}
else if(this.ctrl.user_state.valid==false){
  return alert("State is required");
}
else if(this.ctrl.user_city.valid==false){
  return alert("City is required");
}
else if(this.ctrl.user_dob.valid==false){
  return alert("User Date of Birth required");
}
else if(this.ctrl.user_pincode.valid==false){
  return alert("User PinCode required");
}

else if(this.ctrl.user_email.valid==false){
 
  return alert("User Email required");
  
}
else if(this.ctrl.user_password.valid==false){
  return alert("User Password required");
}


else{

  sessionStorage.setItem('user_email',this.ctrl.user_email.value);
 
  const formData = new FormData();
  formData.append('img1', this.registration.get('user_img').value);
  formData.append('user_first_name',this.registration.controls['user_first_name'].value);
  formData.append('user_last_name',this.registration.controls['user_last_name'].value);
  formData.append('user_add',this.registration.controls['user_add'].value);
  formData.append('user_gender',this.registration.controls['user_gender'].value);
  formData.append('user_state',this.registration.controls['user_state'].value);
  formData.append('user_city',this.registration.controls['user_city'].value);
  formData.append('user_dob',this.registration.controls['user_dob'].value);
  formData.append('user_pincode',this.registration.controls['user_pincode'].value);
  formData.append('user_email',this.registration.controls['user_email'].value);
  formData.append('user_password',this.registration.controls['user_password'].value);
  formData.append('user_date',this.registration.controls['user_date'].value);
  formData.append('user_id', this.registration.controls['user_id'].value);
  formData.append('user_code', this.user_code);
 
  this.http.post(this.postUrl,formData).subscribe((data:any) => {
    console.log(data)
    sessionStorage.setItem('user',JSON.stringify(this.ctrl.user_email.value));
    sessionStorage.setItem('user_code',this.ctrl.user_id.value);

    let user_code:any= sessionStorage.getItem('user_code');  
    console.log(user_code);
    
    alert("thanks for the registration..")
    this.router.navigate([`registrationotp/${user_code}`])
    })
    }
  }
}

