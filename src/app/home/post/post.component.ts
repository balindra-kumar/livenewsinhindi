import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/admin/vertical/dashboard/user.service';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT,Location  } from '@angular/common';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';

//import { HtmlTransformPipe } from '../pipe/html-transform.pipe';

declare var $:any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
 
  allPostUrl = "http://balindra.com/post/read.php";
   //science category post show
   scienceReadUrl = "http:balindra.com/post/science.php";
  
  cmturl = "http://balindra.com/post/cmt-read.php";

  cmtPostUrl = "http://balindra.com/post/cmt-create.php";

  adsUrl = "http://balindra.com/post/ads-read.php";
  adsArrayData:any =[];

  arrayData:any =[];
  commentArray:any =[];

  scienceArrayData:any = [];
  allpostArray: any = []; 
  
 
  webCategoryCode:any =[];
  relatedPostArray:any=[];
  

  constructor(
    @Inject(DOCUMENT) private doc:any,
    private metaService:Meta,
    private _location: Location,
    private http: HttpClient, 
    private routes:ActivatedRoute, 
    private UserService:UserService, 
    private formBuilder: FormBuilder,
    private titleService:Title,
    private router: Router
    )
    
    {
    this.routes.paramMap.subscribe((param:ParamMap)=>{      
    let url:any=param.get('id');
      UserService.singlePostComment(url).subscribe((cmtData:any)=>{
      this.commentArray = cmtData;
      //console.log(this.routes.snapshot.url[1].path);
    
    })

       
      this.UserService.singlePostRead(url).subscribe((data:any)=>{
      this.allpostArray=data;
      

      this.webCategoryCode=this.allpostArray[0].post_cat;
      
    
      this.getRelatedPost(url);
      
      let viewpost= `http://balindra.com/post/post-view.php?post_url=${url}`;
      this.http.get(viewpost,{responseType:'json'}).subscribe((data5)=>{
        console.log(data5)
      })
      this.topToScroll()

    });

    

 
  

      //for next and previous post all deta fetch
      this.http.get(this.allPostUrl,{responseType:'json'}).subscribe((data3:any)=>{
        this.allpostArray = data3;
        
        })
      
        this.http.get(this.allPostUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.allpostArray  = data.filter((postArrayUsingWebCate:any)=>postArrayUsingWebCate.post_cat == this.webCategoryCode)
        console.log(this.allpostArray);
        
       
        })
      })     
    
     
}


topToScroll(){

$(document).ready(function(){

  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
  
})


 }





 getRelatedPost(url:any){
  // console.log(url);
   
     this.UserService.singlePostRead(url).subscribe((data:any)=>{
     this.arrayData=data;
      console.log(this.arrayData);

       this.UserService.relatedPost(this.arrayData[0].post_cat).subscribe((data:any)=>{
       this.relatedPostArray=data.filter((x:any)=>x.post_url !==this.arrayData[0].post_url)
       console.log(this.relatedPostArray);
       //first getting the post view
    
       
     });
     let title=this.arrayData[0].post_title
     //this.metaService.({name:'key',content:'My custom desc'});
     this.metaService.updateTag({name: 'description',content:this.arrayData[0].post_meta_desc});
     this.metaService.updateTag({ name: 'keywords', content: this.arrayData[0].post_meta_keyword });
     this.metaService.updateTag({ name: 'author', content: this.arrayData[0].post_author });
     this.updateCanonicalUrl();     

     this.UserService.setTitle(title); 
   })
   this.topToScroll()
 }
    


      updateCanonicalUrl(){
          const head = this.doc.getElementsByTagName('head')[0];
          var element: HTMLLinkElement= this.doc.querySelector(`link[rel='canonical']`) || null
          if (element==null) {
            element= this.doc.createElement('link') as HTMLLinkElement;
            head.appendChild(element);
          }
          element.setAttribute('rel','canonical')
          element.setAttribute('href',window.location.href)
          //window.scrollTo(0,0);
          this.topToScroll()
        }
       
        // onEdit(){
        //   window.scrollTo(0,0);
        // }  

  getFormattedDate() {
    let date = new Date()
    let fullDate =  date.toDateString();
    let day = fullDate.substring(0,3);
    let date1 = fullDate.substring(7,11);
    let m = fullDate.substring(3,7);
    let y = fullDate.substring(10,16);
    return day+','+date1+m+y;
    }

  getFormattedTime(){
    var date = new Date();
    var time = date.toLocaleTimeString();
    return time;
  
  }



  commentPost:any = new FormGroup({
    cmt_name:new FormControl('',[Validators.required]),
    cmt_email: new FormControl(''),
    cmt_website:new FormControl(''),
    cmt_message:new FormControl('',[Validators.required]),
    cmt_url:new FormControl({value:[this.routes.snapshot.url[1].path], disabled: true}),
    cmt_time:new FormControl({value:this.getFormattedTime(), disabled:true}),
    cmt_date:new FormControl({value:this.getFormattedDate(), disabled:true}),
    cmt_approval:new FormControl('approved')
 
  })

get ctrl(){
  return this.commentPost.controls;
}


commentPostSubmit(){
if(this.ctrl.cmt_name.valid==false){
 return alert("Please Enter Your Name")
}
else if(this.ctrl.cmt_message.valid==false){
  return alert("Share thoughts About the post in Message Field.")
}
else{
  const formData = new FormData();
  formData.append('cmt_name',this.commentPost.controls['cmt_name'].value),
  formData.append('cmt_email',this.commentPost.controls['cmt_email'].value),
  formData.append('cmt_website',this.commentPost.controls['cmt_website'].value),
  formData.append('cmt_message',this.commentPost.controls['cmt_message'].value),
  formData.append('cmt_url',this.commentPost.controls['cmt_url'].value),
  formData.append('cmt_time',this.commentPost.controls['cmt_time'].value),
  formData.append('cmt_date',this.commentPost.controls['cmt_date'].value),
  formData.append('cmt_approval',this.commentPost.controls['cmt_approval'].value)

  this.http.post(this.cmtPostUrl,formData).subscribe((result:any)=>{
    console.log(result)
    alert("Thanks for review ! your review is published.");
    this.getCommentData(this.commentPost.controls['cmt_url'].value);
  })
 
}
}


status:boolean = false;

postLike(post_url:any){
  let postlike= `http://balindra.com/post/post-like.php?post_url=${post_url}`;
  this.http.get(postlike,{responseType:'json'}).subscribe((data)=>{
   this.status=!this.status;
   console.log(data)
   this.getLikeCount(post_url);
  })
  
}

  /*===================================================================== */
  getLikeCount(url:any){
    this.UserService.singlePostRead(url).subscribe((data:any)=>{
      this.arrayData=data;

  })
}
  getCommentData(url:any){
    this.UserService.singlePostComment(url).subscribe((cmtData:any)=>{
      this.commentArray = cmtData;
      //console.log(this.routes.snapshot.url[1].path);
    
    })
  }

 /*===================================================================== */





//add new scripts for next & prev



reference:any = this.allpostArray

currentIndexToShow:number = 0;
prevPost(){
 
  this.currentIndexToShow--;
  if(this.currentIndexToShow < 0){
    this.currentIndexToShow =0;
  }
  if(this.currentIndexToShow >this.allpostArray.length){
    this.currentIndexToShow =this.allpostArray.length;
  }
  if(this.currentIndexToShow >=0 && this.currentIndexToShow <this.allpostArray.length ){
   
    this.reference = this.allpostArray[this.currentIndexToShow]; 
   
    this.arrayData=[];
    this.arrayData.push(this.reference);
    let url=this.reference.post_url;
    this.getRelatedPost(url)
    this.updateUrl(url)
   
  

    let viewpost= `http://balindra.com/post/post-view.php?post_url=${url}`;
    this.http.get(viewpost,{responseType:'json'}).subscribe((data:any)=>{
      console.log(data)
     
    })
   
 }
}


updateUrl(url: string) {
 
  const a=document.createElement("a");
  a.href="post/"+url;
  a.click()
  this._location.go(url)
}

NextPost(){
  
  this.currentIndexToShow++;
  if(this.currentIndexToShow < 0){
    this.currentIndexToShow =0;
  }
  if(this.currentIndexToShow >this.allpostArray.length){
    this.currentIndexToShow =this.allpostArray.length;
  }
  if(this.currentIndexToShow >=0 && this.currentIndexToShow <this.allpostArray.length ){
   
    
    this.reference = this.allpostArray[this.currentIndexToShow]; 
    this.arrayData=[];
    this.arrayData.push(this.reference);
    let url:any=this.reference.post_url;
    this.getRelatedPost(url)
    this.updateUrl(url)
    
   
    let viewpost= `http://balindra.com/post/post-view.php?post_url=${url}`;
    this.http.get(viewpost,{responseType:'json'}).subscribe((data8)=>{
      console.log(data8)
    })
 }


 this.http.get(this.adsUrl,{responseType:'json'}).subscribe((data:any)=>{
 // To extract data matching from the email id
 this.adsArrayData = this.arrayData.sort((a:any,b:any)=>{
  return new Date(b.product_updated_day) < new Date(a.product_updated_day)
})
console.log(this.adsArrayData)
})  
}


}





