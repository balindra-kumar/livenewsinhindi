import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PostdatePipe } from '../postdate.pipe';
import { PostviewpipePipe } from '../pipe/postviewpipe.pipe';
@Component({
  standalone: true,
  imports:[RouterLink,DatePipe,PostdatePipe, PostviewpipePipe],
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
 
  popularPostUrl = "https://hinditerm.com/demo/post/popular-post.php";
  popularPostArray:any=[];

  jobPopularPostUrl = "https://hinditerm.com/demo/post/popular-job.php";
  jobPopularPostArray:any=[];

  commentArray:any=[];
  commentArrayUrl="https://hinditerm.com/demo/post/comment.php";

  constructor(private http:HttpClient){

  this.http.get(this.popularPostUrl,{responseType:'json'}).subscribe((data:any)=>{
    this.popularPostArray  = data;
    console.log(data);
  })

  //Getting Post Views 
     let viewpost= `https://hinditerm.com/demo/post/post-view.php?post_url=${this.popularPostArray.post_url}`;
     this.http.get(viewpost,{responseType:'json'}).subscribe((data)=>{
       console.log(data)
     })

    //jobs latest Post 
   
     this.http.get(this.jobPopularPostUrl,{responseType:'json'}).subscribe((data1:any)=>{
      this.jobPopularPostArray = data1;
      console.table(data1);
    })

     //Latest Post Comment from the users
  
     this.http.get(this.commentArrayUrl,{responseType:'json'}).subscribe((data2:any)=>{
      this.commentArray = data2;
      console.table(data2);
    })
  

}

}
