import { HttpClient,HttpClientModule, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink,],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  onePostDataArray:any = [];
  
  notAuthorized:any;
  user:any=sessionStorage.getItem("authorized")?.toString();
  logiSuccess:any = sessionStorage.getItem('Login successful')?.toString();
  authorizedUserId: any = sessionStorage.getItem('authorizedUserId')?.toString();

  postReadUrl = "https://hinditerm.com/demo/post/read.php";
  postArrayData:any = [];
  item:any;
  filteredData:any=[];


  customHash(value: string): string {
    let hash = 0;

    if (value.length === 0) return hash.toString();

    for (let i = 0; i < value.length; i++) {
      const char = value.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }

    return hash.toString();
  }
  constructor(private http:HttpClient, private router:Router){


    
   
  // var user:any=sessionStorage.getItem("user_id");
  // var authorEmail:any =sessionStorage.getItem("user_email");

  // const hashedValue =  btoa(String.fromCharCode.apply(new TextEncoder().encode(user)));
  // const hashedValue2 =  btoa(String.fromCharCode.apply(new TextEncoder().encode(user)));

  // var user:any = this.customHash(user)
  // var authorEmail:any=this.customHash(authorEmail)

   //this.http.get(`https://hinditerm.com/demo/post/read.php?param1=${hashedValue}&param2=${hashedValue2}`).subscribe((data:any)=>{
   
    

    //console.log(authorEmail);
    // To extract data matching from the email id
   
   
    //this.postArrayData  = data;
   // this.postArrayData  = data.filter((postArrayUsingWebCate:any)=>postArrayUsingWebCate.author_email==authorEmail)
    
   // this.filteredData = this.postArrayData
   // this.refreshData()
  //}
 
   //)
   
  }


  ngOnInit():void{

    if(this.logiSuccess.length==0){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  
    if(this.user==null || this.notAuthorized=="Not Authorized User" || this.user.length==0 || this.logiSuccess.length==0 || this.logiSuccess!=="Login successful"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  if(this.postArrayData.length==1){
    
    this.router.navigate(['/dashboard']);
  }


  let formData = new FormData();
  formData.append('user_key', this.user);
  formData.append('authorizedUserId',this.authorizedUserId);
  
   // this.http.get(`https://hinditerm.com/demo/post/user-read.php?user_key=${this.user}`).subscribe((res:any)=>{
     this.http.post('https://hinditerm.com/demo/post/admin_post_read.php',formData).subscribe((res:any)=>{
     
     console.log(res.message)
      if(res.message=="Not Authorized User" || res.message=="Login failed" || res.message=="Student Record does not exist"){
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }
      else{
        this.postArrayData=res.data
        this.filteredData = this.postArrayData
        //this.refreshData()
        console.log( this.postArrayData);
      }
     
    })

  }





 // refreshData(){
   // this.http.get(this.postReadUrl,{responseType:'json'}).subscribe((data:any)=>{
      // let usr:any=sessionStorage.getItem("user");
      // let AuthorEmailExtract =JSON.parse(usr);
      // let authorEmail =AuthorEmailExtract.user_email
      // console.log(authorEmail);
      // To extract data matching from the email id
      //this.postArrayData  = data.filter((postArrayUsingWebCate:any)=>postArrayUsingWebCate.user_key==this.authorizedUserId)
      
   // })
  //}


 


  deleteDataClick(id:string){
    var strconfirm = confirm("Are you sure you want to delete?");
    if (strconfirm == true) {
      
    
    this.deleteDataS(id).subscribe((data:any)=>{
      alert("one data deleted which id is"+id);
     // this.refreshData();
    })
   }
   
  }
  deleteDataS(id:string){
    let getUrl= "https://hinditerm.com/demo/post/delete.php";
    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.delete(`${getUrl}`, { params: params, responseType:'json' });
 
  }
  OneDataShow(id:string){
    let getUrl= "https://hinditerm.com/demo/post/admin-single-data.php";
    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.get(`${getUrl}`, { params: params, responseType:'json' });
 
  }

  ShowDataClick(id:string){
    this.OneDataShow(id).subscribe((data:any)=>{
      this.onePostDataArray = data;
     
    })
  }
  

  redirectToSpecificPost(item:any){
   let itemId=item.post_id;
   let encryptedId= btoa(itemId);
   console.log(encryptedId,typeof itemId)
   this.router.navigateByUrl(`admin/updatepost/${encryptedId}`);
  }

 


  filterData(event: any): void {
    let searchTerm= event.target.value;
    this.filteredData = this.postArrayData.filter((item:any) =>
      item.post_title.toLowerCase().includes(searchTerm.toLowerCase())
    );


  }


  }
  



