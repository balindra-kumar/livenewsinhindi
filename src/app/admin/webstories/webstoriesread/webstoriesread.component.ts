import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HttpClient,HttpClientModule, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-webstoriesread',
  standalone: true,
  templateUrl: './webstoriesread.component.html',
  styleUrls: ['./webstoriesread.component.css'],
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink,],
})
export class WebstoriesreadComponent implements OnInit{
  
  notAuthorized:any;
  user:any=sessionStorage.getItem("authorized")?.toString();
  logiSuccess:any = sessionStorage.getItem('Login successful')?.toString();
  authorizedUserId: any = sessionStorage.getItem('authorizedUserId')?.toString();
 

 
  webstoriesArrayData:any=[];
  filteredData:any =[];

  constructor(private http:HttpClient, private router:Router){

}


ngOnInit():void{

  // if(this.logiSuccess.length===0){
  //   sessionStorage.clear();
  //   this.router.navigate(['/login']);
  // }

  if(this.user==null || this.notAuthorized=="Not Authorized User" || this.user.length==0 || this.logiSuccess.length==0 || this.logiSuccess!=="Login successful"){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
// if(this.webstoriesArrayData.length==1){
  
//   this.router.navigate(['/dashboard']);
// }


let formData = new FormData();
formData.append('user_key', this.user);
formData.append('authorizedUserId',this.authorizedUserId);
 
   this.http.post('https://hinditerm.com/demo/post/admin-webstories-read.php',formData).subscribe((res:any)=>{
   
   console.log(res)
    if(res.message=="Not Authorized User" || res.message=="Login failed" || res.message=="Student Record does not exist"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
    else{
      this.webstoriesArrayData=res.data
      console.log("data is",this.webstoriesArrayData)
      this.filteredData = this.webstoriesArrayData
      //this.refreshData()
      console.log( this.webstoriesArrayData);
    }
   
  })
  console.log( "webstories" , this.webstoriesArrayData);
}



refreshData(){
  let formData = new FormData();
  formData.append('user_key', this.user);
  formData.append('authorizedUserId',this.authorizedUserId);
  
   // this.http.get(`https://hinditerm.com/demo/post/user-read.php?user_key=${this.user}`).subscribe((res:any)=>{
     this.http.post('https://hinditerm.com/demo/post/admin-webstories-read.php',formData).subscribe((res:any)=>{
     
     console.log(res)
      if(res.message=="Not Authorized User" || res.message=="Login failed" || res.message=="Student Record does not exist"){
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }
      else{
        this.webstoriesArrayData=res.data
        console.log("data is",this.webstoriesArrayData)
        this.filteredData = this.webstoriesArrayData
        //this.refreshData()
        console.log( this.webstoriesArrayData);
      }
     
    })
}

deleteWebStories(web_id:any){
  
let formData = new FormData();
formData.append('user_key', this.user);
formData.append('authorizedUserId',this.authorizedUserId);
formData.append('web_id',web_id);

  if(confirm("Are you sure to delete "+web_id)) {
  this.http.post('https://hinditerm.com/demo/post/web-stories-delete.php',formData).subscribe((data:any)=>{
    alert("one record delete"+web_id);
     this.refreshData()
  })
}
else{
   alert('Thanks your data is safe.you r redirect to same page');
   //window.location.href;
}
}


redirectToSpecificPost(item:any){
  let itemId=item.web_id;
  let encryptedId= btoa(itemId);
  console.log(encryptedId,typeof itemId)
  this.router.navigateByUrl(`dashboard/webstoriesupdate/${encryptedId}`);
 }

}
