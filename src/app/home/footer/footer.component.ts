import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PostdatePipe } from '../postdate.pipe';
declare var $:any;
@Component({
  standalone: true,
  imports:[RouterLink,DatePipe,PostdatePipe],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  postReadUrl = "http://balindra.com/post/read.php";
  postArrayData:any = [];

  
  //news category post show
  newsReadUrl = "http://balindra.com/post/news.php";
  newsArrayData:any = [];

  //Technology category post show
  techReadUrl = "http://balindra.com/post/tech.php";
  techArrayData:any = [];

  //Job category post show
  jobReadUrl = "http://balindra.com/post/job.php";
  jobArrayData:any = [];

  //Busines category post show
  busiReadUrl = "http://balindra.com/post/business.php";
  busiArrayData:any = [];

   //Health category post show
   healthReadUrl = "http://balindra.com/post/health.php";
   healthArrayData:any = [];

    //science category post show
    scienceReadUrl = "http://balindra.com/post/science.php";
    scienceArrayData:any = [];
    scrolltop(){

      $(document).ready(function(){
      
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        })
        
      })
      
      
       }
  constructor(private http:HttpClient){

    this.http.get(this.postReadUrl,{responseType:'json'}).subscribe((data:any)=>{
     this.postArrayData=data;
     this.scrolltop()
    })
  
    //news category post show
    this.http.get(this.newsReadUrl,{responseType:'json'}).subscribe((data:any)=>{
    this.newsArrayData=data;
    this.scrolltop()

    
   })

     //news category post show
     this.http.get(this.techReadUrl,{responseType:'json'}).subscribe((data:any)=>{
      this.techArrayData=data;
      this.scrolltop()
     })

      //Job category post show
      this.http.get(this.jobReadUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.jobArrayData=data;
        this.scrolltop()
       })

       //Business category post show
      this.http.get(this.busiReadUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.busiArrayData=data;
        this.scrolltop()
       })
         //Health category post show
      this.http.get(this.healthReadUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.healthArrayData=data;
        this.scrolltop()
       })

           //Science category post show
        this.http.get(this.scienceReadUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.scienceArrayData=data;
        this.scrolltop()
       })

      }

}
