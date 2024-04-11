import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { PostdatePipe } from '../postdate.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
declare var $:any;
@Component({
    standalone: true,
    selector: 'app-newstoday',
    templateUrl: './newstoday.component.html',
    styleUrls: ['./newstoday.component.css'],
    imports: [CommonModule, RouterLink, HttpClientModule,PostdatePipe, NavbarComponent,RouterOutlet]
})
export class NewstodayComponent {

  postReadUrl = "https://hinditerm.com/demo/post/read.php";
  postArrayData:any = [];

  //news category post show
  newsArrayData:any = [];
   newsReadUrl = "https://hinditerm.com/demo/post/news.php";
   

   //Technology category post show
   techArrayData:any = [];

   techReadUrl = "https://hinditerm.com/demo/post/tech.php";
  
   //Job category post show
   jobArrayData:any = [];
   jobReadUrl = "https://hinditerm.com/demo/post/job.php";
  

   //Busines category post show
   busiArrayData:any = [];
   busiReadUrl = "https://hinditerm.com/demo/post/business.php";
  

    //Health category post show
    healthArrayData:any = [];
    healthReadUrl = "https://hinditerm.com/demo/post/health.php";
 

     //science category post show
     scienceArrayData:any = [];
     scienceReadUrl = "https://hinditerm.com/demo/post/science.php";
   
   
    
  constructor(private http:HttpClient){

   this.http.get(this.postReadUrl,{responseType:'json'}).subscribe((data:any)=>{
    this.postArrayData=data;
    this.postArrayData=this.postArrayData.sort((b:any,a:any)=>{
      return new Date(b.post_update_date) < new Date(a.post_update_date);
    })
     
   })
  
    //news category post show
   this.http.get(this.newsReadUrl,{responseType:'json'}).subscribe((data:any)=>{
    this.newsArrayData=data;
    this.newsArrayData=this.newsArrayData.sort((b:any,a:any)=>{
      return new Date(b.post_update_date) < new Date(a.post_update_date);
    })
   })

     //news category post show
     this.http.get(this.techReadUrl,{responseType:'json'}).subscribe((data:any)=>{
      this.techArrayData=data;
      this.techArrayData=this.techArrayData.sort((b:any,a:any)=>{
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      })
     })

      //Job category post show
      this.http.get(this.jobReadUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.jobArrayData=data;
        this.jobArrayData=this.jobArrayData.sort((b:any,a:any)=>{
          return new Date(b.post_update_date) < new Date(a.post_update_date);
        }) 
       })

       //Business category post show
      this.http.get(this.busiReadUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.busiArrayData=data;
        this.busiArrayData=this.busiArrayData.sort((b:any,a:any)=>{
          return new Date(b.post_update_date) < new Date(a.post_update_date);
        }) 
       })
         //Health category post show
      this.http.get(this.healthReadUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.healthArrayData=data;
        this.healthArrayData=this.healthArrayData.sort((b:any,a:any)=>{
          return new Date(b.post_update_date) < new Date(a.post_update_date);
        }) 
       })

       //Science category post show
       this.http.get(this.scienceReadUrl,{responseType:'json'}).subscribe((data1:any)=>{
        this.scienceArrayData=data1;
        this.scienceArrayData=this.scienceArrayData.sort((b:any,a:any)=>{
          return new Date(b.post_update_date) < new Date(a.post_update_date);
        })
       })
 
  }

 

  
  
  scrolltop(){
    window.scrollTo(0,0)
  }
}
