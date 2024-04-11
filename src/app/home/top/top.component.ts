import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RouterOutlet } from '@angular/router';
import { PostdatePipe } from '../postdate.pipe';
import { RouterLink } from '@angular/router';
@Component({
  standalone: true,
  imports:[RouterOutlet,PostdatePipe,RouterLink],
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent{
  postReadUrl = "https://hinditerm.com/demo/post/read.php";
  topPostArray:any = [];
  storeyData:any = []

storeyUrl="https://hinditerm.com/demo/post/webstories-read.php"
  constructor(private http:HttpClient){
    this.http.get(this.postReadUrl,{responseType:'json'}).subscribe((data:any)=>{
      this.topPostArray=data
      this.topPostArray= this.topPostArray.sort((b:any,a:any)=>{
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      })
          
    })

  //Web Stories
  this.http.get(this.storeyUrl,{responseType:'json'}).subscribe((data1:any)=>{
    this.storeyData = data1;
    this.storeyData= this.storeyData.sort((b:any,a:any)=>{
      return new Date(b.post_update_date) < new Date(a.post_update_date);
    })
  })

  }
 
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 3
  //     }
  //   },
  //   nav: true
  // }
 
}
