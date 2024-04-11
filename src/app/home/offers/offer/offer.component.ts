import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit{
  postUrl = "http://balindra.com/post/ads-read.php";
  arrayData: any = [];
constructor(private http:HttpClient){}

ngOnInit():void{
 this.http.get(this.postUrl,{responseType:'json'}).subscribe((result)=>{
  this.arrayData=result;
 })
}
}
