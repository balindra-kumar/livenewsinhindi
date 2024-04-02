import { HttpClient,HttpClientModule, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@Component({
  standalone:true,
  selector: 'app-webstoriescreate',
  templateUrl: './webstoriescreate.component.html',
  styleUrls: ['./webstoriescreate.component.css'],
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink,],
  
})
export class WebstoriescreateComponent {
  notAuthorized:any;
  user:any=sessionStorage.getItem("authorized")?.toString();
  logiSuccess:any = sessionStorage.getItem('Login successful')?.toString();
  authorizedUserId: any = sessionStorage.getItem('authorizedUserId')?.toString();
  userArrayData :any =[]
  web_title:any="";
  postUrl= "https://hinditerm.com/demo/post/webstories-create.php";

  postDataUrl = "https://hinditerm.com/demo/post/read.php";

  constructor(private http:HttpClient,private router:Router){
   
  }

  

    
  ngOnInit(): void {


    if(this.logiSuccess.length==0){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  
    if(this.user==null || this.notAuthorized=="Not Authorized User" || this.user.length==0 || this.logiSuccess.length==0 || this.logiSuccess!=="Login successful"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  // if(this.postDataArray.length==1){
    
  //   //this.router.navigate(['/dashboard']);
  // }

  let formData = new FormData();
  formData.append('user_key', this.user);
  formData.append('authorizedUserId',this.authorizedUserId);
  
  // this.http.get(`https://hinditerm.com/demo/post/user-read.php?user_key=${this.user}`).subscribe((res:any)=>{
   this.http.post('https://hinditerm.com/demo/post/user-read.php',formData).subscribe((res:any)=>{
   this.userArrayData = res.data[0];
   console.log(res.message)
    if(res.message=="Not Authorized User" || res.message=="Login failed" || res.message=="Student Record does not exist"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  
  
    })


  }  

      
       //add value for date
    getFormattedDate() {
      let date = new Date()
      let fullDate =  date.toDateString();
      let day = fullDate.substring(0,3);
      let date1 = fullDate.substring(7,11);
      let m = fullDate.substring(3,7);
      let y = fullDate.substring(10,16);
      return day+','+date1+m+y;
      }
   //add value for time
    getFormattedTime(){
      var date = new Date();
      var time = date.toLocaleTimeString();
      return time;
    
    }

    onInputPost(){

      let postValue=this.webstories.get("web_title").value;
      let postConvertedValue=postValue!.split(' ').join('-').toLowerCase().substr(0,30);
      this.webstories.get("web_link").setValue(postConvertedValue)
      // [value]="post_title?.split(' ')?.join('-').toLowerCase().substr(0,30)"
    }
    author_email(){
      // let usr:any =sessionStorage.getItem("user")
      // let AuthorEmailExtract =JSON.parse(usr)
      // return AuthorEmailExtract.user_email
      return  this.userArrayData.user_email;
    }
    
    author_name(){
      // let usr:any =sessionStorage.getItem("user")
    
       let f_name = this.userArrayData.user_first_name;
       let l_name =this.userArrayData.user_last_name;
      return f_name + ' ' + l_name;
    
    }
 

  webstories:any = new FormGroup({
    web_title: new FormControl('',[Validators.required]),
    web_meta_desc: new FormControl('',[Validators.required]),
    web_meta_key: new FormControl('',[Validators.required]),
    web_link: new FormControl('',[Validators.required]),
    web_cat: new FormControl('',[Validators.required]),
    web_date: new FormControl({value:this.getFormattedDate(),disabled:true}),
    web_time: new FormControl({value:this.getFormattedTime(), disabled:true}),
    web_hour: new FormControl(''),

    web_heading1: new FormControl('',[Validators.required]),
    web_img1: new FormControl('',[Validators.required]),
    web_heading_desc1: new FormControl('',[Validators.required]),

    web_heading2: new FormControl('',[Validators.required]),
    web_img2: new FormControl('',[Validators.required]),
    web_heading_desc2: new FormControl('',[Validators.required]),

    web_heading3: new FormControl('',[Validators.required]),
    web_img3: new FormControl('',[Validators.required]),
    web_heading_desc3: new FormControl('',[Validators.required]),

    web_heading4: new FormControl('',[Validators.required]),
    web_img4: new FormControl('',[Validators.required]),
    web_heading_desc4: new FormControl('',[Validators.required]),

    web_heading5: new FormControl('',[Validators.required]),
    web_img5: new FormControl('',[Validators.required]),
    web_heading_desc5: new FormControl('',[Validators.required]),

    web_heading6: new FormControl('',[Validators.required]),
    web_img6: new FormControl('',[Validators.required]),
    web_heading_desc6: new FormControl('',[Validators.required]),
    
    web_heading7: new FormControl('',[Validators.required]),
    web_img7: new FormControl('',[Validators.required]),
    web_heading_desc7: new FormControl('',[Validators.required]),

    web_heading8: new FormControl('',[Validators.required]),
    web_img8: new FormControl('',[Validators.required]),
    web_heading_desc8: new FormControl('',[Validators.required]),

    web_heading9: new FormControl('',[Validators.required]),
    web_img9: new FormControl('',[Validators.required]),
    web_heading_desc9: new FormControl('',[Validators.required]),

    post_author : new FormControl({value: this.author_name(),disabled:true}),
    user_email: new FormControl({value:this.author_email(), disabled:true}),
    web_approval: new FormControl('')

  })

get ctrl(){
  return this.webstories.controls
}





onSelectedFile(event:any){
  if(event.target.files && event.target.files.length>0){
    const img1 = (event.target.files[0] as File);
    this.webstories.get('web_img1').setValue(img1);
   
  }
}

onSelectedFile2(event:any){
  if(event.target.files && event.target.files.length>0){
    const img2 = (event.target.files[0] as File);
    this.webstories.get('web_img2').setValue(img2);
   
  }
}
onSelectedFile3(event:any){
  if(event.target.files && event.target.files.length>0){
    const img3 = (event.target.files[0] as File);
    this.webstories.get('web_img3').setValue(img3);
   
  }
}
onSelectedFile4(event:any){
  if(event.target.files && event.target.files.length>0){
    const img4 = (event.target.files[0] as File);
    this.webstories.get('web_img4').setValue(img4);
  
  }
}
onSelectedFile5(event:any){
  if(event.target.files && event.target.files.length>0){
    const img5 = (event.target.files[0] as File);
    this.webstories.get('web_img5').setValue(img5);
  
  }
}
onSelectedFile6(event:any){
  if(event.target.files && event.target.files.length>0){
    const img6 = (event.target.files[0] as File);
    this.webstories.get('web_img6').setValue(img6);
   
  }
}
onSelectedFile7(event:any){
  if(event.target.files && event.target.files.length>0){
    const img7 = (event.target.files[0] as File);
    this.webstories.get('web_img7').setValue(img7);
   
  }
}
onSelectedFile8(event:any){
  if(event.target.files && event.target.files.length>0){
    const img8 = (event.target.files[0] as File);
    this.webstories.get('web_img8').setValue(img8);
   
  }
}
onSelectedFile9(event:any){
  if(event.target.files && event.target.files.length>0){
    const img9= (event.target.files[0] as File);
    this.webstories.get('web_img9').setValue(img9);
 
  }
}



  webstoriesSubmit(){
 
  if(this.ctrl.web_title.valid==false){
    return alert("Title Required")
  }
  else if(this.ctrl.web_meta_desc.valid==false){
    return alert("Meta Description Required")
  }
  else if(this.ctrl.web_meta_key.valid==false){
    return alert("Meta Keywords Required")
  }
  else if(this.ctrl.web_link.valid==false){
    return alert("Web Link Required")
  }
  else if(this.ctrl.web_cat.valid==false){
    return alert("Web Categorey Required")
  }
  else if(this.ctrl.web_heading1.valid==false){
    return alert("web_heading1 Required")
  }
  else if(this.ctrl.web_img1.valid==false){
    return alert("web_img1 Required")
  }
  else if(this.ctrl.web_heading_desc1.valid==false){
    return alert("web_heading_desc1 Required")
  }
  else if(this.ctrl.web_heading2.valid==false){
    return alert("web_heading2 Required")
  }
  else if(this.ctrl.web_img2.valid==false){
    return alert("web_img2 Required")
  }
  else if(this.ctrl.web_heading_desc2.valid==false){
    return alert("web_heading_desc2 Required")
  }
  else if(this.ctrl.web_heading3.valid==false){
    return alert("web_heading3 Required")
  }
  else if(this.ctrl.web_img3.valid==false){
    return alert("web_img3 Required")
  }
  else if(this.ctrl.web_heading_desc3.valid==false){
    return alert("web_heading_desc3 Required")
  }
  else if(this.ctrl.web_heading4.valid==false){
    return alert("web_heading4 Required")
  }
  else if(this.ctrl.web_img4.valid==false){
    return alert("web_img4 Required")
  }
  else if(this.ctrl.web_heading_desc4.valid==false){
    return alert("web_heading_desc4 Required")
  }
  else if(this.ctrl.web_heading5.valid==false){
    return alert("web_heading5 Required")
  }
  else if(this.ctrl.web_img5.valid==false){
    return alert("web_img5 Required")
  }
  else if(this.ctrl.web_heading_desc5.valid==false){
    return alert("web_heading_desc5 Required")
  }

  else if(this.ctrl.web_heading6.valid==false){
    return alert("web_heading_desc5 Required")
  }
  else if(this.ctrl.web_img6.valid==false){
    return alert("web_img6 Required")
  }
  else if(this.ctrl.web_heading_desc6.valid==false){
    return alert("web_heading_desc6 Required")
  }

  else if(this.ctrl.web_heading7.valid==false){
    return alert("web_heading7 Required")
  }
  else if(this.ctrl.web_img7.valid==false){
    return alert("web_img7 Required")
  }
  else if(this.ctrl.web_heading_desc7.valid==false){
    return alert("web_heading_desc7 Required")
  }

  else if(this.ctrl.web_heading8.valid==false){
    return alert("web_heading8 Required")
  }
  else if(this.ctrl.web_img8.valid==false){
    return alert("web_img8 Required")
  }
  else if(this.ctrl.web_heading_desc8.valid==false){
    return alert("web_heading_desc8 Required")
  }

  else if(this.ctrl.web_heading9.valid==false){
    return alert("web_heading9 Required")
  }
  else if(this.ctrl.web_img9.valid==false){
    return alert("web_img9 Required")
  }
  else if(this.ctrl.web_heading_desc9.valid==false){
    return alert("web_heading_desc9 Required")
  }
 
 else{

  const formData = new FormData();
  formData.append('user_key', this.user);
  formData.append('authorizedUserId',this.authorizedUserId);
  formData.append('web_title',this.webstories.controls['web_title'].value);
  formData.append('web_meta_desc',this.webstories.controls['web_meta_desc'].value);
  formData.append('web_meta_key',this.webstories.controls['web_meta_key'].value);
  formData.append('web_link',this.webstories.controls['web_link'].value);
  formData.append('web_cat',this.webstories.controls['web_cat'].value);
  formData.append('web_date',this.webstories.controls['web_date'].value);
  formData.append('web_time',this.webstories.controls['web_time'].value);
  formData.append('web_hour',this.webstories.controls['web_hour'].value);
  formData.append('web_heading1',this.webstories.controls['web_heading1'].value);
  formData.append('img1',this.webstories.get('web_img1').value);
  formData.append('web_heading_desc1',this.webstories.controls['web_heading_desc1'].value);
  formData.append('web_heading2',this.webstories.controls['web_heading2'].value);
  formData.append('img2',this.webstories.get('web_img2').value);
  formData.append('web_heading_desc2',this.webstories.controls['web_heading_desc2'].value);
  formData.append('web_heading3',this.webstories.controls['web_heading3'].value);
  formData.append('img3',this.webstories.get('web_img3').value);
  formData.append('web_heading_desc3',this.webstories.controls['web_heading_desc3'].value);
  formData.append('web_heading4',this.webstories.controls['web_heading4'].value);
  formData.append('img4',this.webstories.get('web_img4').value);
  formData.append('web_heading_desc4',this.webstories.controls['web_heading_desc4'].value);

  formData.append('web_heading5',this.webstories.controls['web_heading5'].value);
  formData.append('img5',this.webstories.get('web_img5').value);
  formData.append('web_heading_desc5',this.webstories.controls['web_heading_desc5'].value);

  formData.append('web_heading6',this.webstories.controls['web_heading6'].value);
  formData.append('img6',this.webstories.get('web_img6').value);
  formData.append('web_heading_desc6',this.webstories.controls['web_heading_desc6'].value);
  formData.append('web_heading7',this.webstories.controls['web_heading7'].value);
  formData.append('img7',this.webstories.get('web_img7').value);
  formData.append('web_heading_desc7',this.webstories.controls['web_heading_desc7'].value);

  formData.append('web_heading8',this.webstories.controls['web_heading8'].value);
  formData.append('img8',this.webstories.get('web_img8').value);
  formData.append('web_heading_desc8',this.webstories.controls['web_heading_desc8'].value);

  formData.append('web_heading9',this.webstories.controls['web_heading9'].value);
  formData.append('img9',this.webstories.get('web_img9').value);
  formData.append('web_heading_desc9',this.webstories.controls['web_heading_desc9'].value);
  formData.append('web_approval',this.webstories.controls['web_approval'].value);
  formData.append('post_author',this.webstories.controls['post_author'].value);
  formData.append('user_email',this.webstories.controls['user_email'].value);
  this.http.post(this.postUrl,formData).subscribe((data:any)=>{
   alert("Successfully Post");
   
 })
 }
  



  }
}

