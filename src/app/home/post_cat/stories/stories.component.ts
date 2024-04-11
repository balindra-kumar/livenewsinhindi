import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostdatePipe } from '../../postdate.pipe';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  standalone: true,
  imports: [CommonModule,HttpClientModule,PostdatePipe,RouterOutlet,RouterLink],
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit{


   //Global Varibales declared
   currentPage: number = 1;
   postsPerPage: number = 3;
   totalPages: any ="";
   displayedPosts:any=[];
   pageNumbers:any=[];


  storeyData:any = []
  storeyUrl="http://balindra.com/post/webstories-read.php"
  constructor(private http:HttpClient){

}
 
ngOnInit(): void {
  
//Web Stories
this.http.get(this.storeyUrl,{responseType:'json'}).subscribe((data1:any)=>{
  this.storeyData = data1;
  this.storeyData= this.storeyData.sort((b:any,a:any)=>{
    return new Date(b.post_update_date) < new Date(a.post_update_date);
  })
})
 //Showing the Next Prev Page Post
 this.totalPages = Math.ceil(this.storeyData.length / this.postsPerPage);
 this.displayedPosts = this.getPostsForCurrentPage();
 this.pageNumbers = this.generatePageNumbers();
}

 //Show Post Next Prev Function
 //===================================
 getPostsForCurrentPage(){
  const startIndex = (this.currentPage - 1) * this.postsPerPage;
  const endIndex = startIndex + this.postsPerPage;
  return this.storeyData.slice(startIndex, endIndex);
}

goToPreviousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.displayedPosts = this.getPostsForCurrentPage();
  }
}

goToNextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.displayedPosts = this.getPostsForCurrentPage();
  }
 
} 
goToPage(pageNumber: number) {
  this.currentPage = pageNumber;
  this.displayedPosts = this.getPostsForCurrentPage();
}
generatePageNumbers(){

 const totalPage = Math.ceil(this.storeyData.length/this.postsPerPage);
 const pageNumbers = [];
 for(let i=0; i<=totalPage && i<=10; i++){
  pageNumbers.push(i);
 }
 return pageNumbers;
}
//=================================================
}
 

