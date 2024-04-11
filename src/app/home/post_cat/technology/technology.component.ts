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
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent   implements OnInit{

  //news category post show
  newsReadUrl = "http://balindra.com/post/technology.php";
  newsArrayData:any = [];
  
  
  //Global Varibales declared
  currentPage: number = 1;
  postsPerPage: number = 3;
  totalPages: any ="";
  displayedPosts:any=[];
  pageNumbers:any=[];
  
  constructor(private http:HttpClient){ //news category post show
  }
     ngOnInit(): void {
    this.http.get(this.newsReadUrl,{responseType:'json'}).subscribe((data:any)=>{
      this.newsArrayData=data;
      this.newsArrayData= this.newsArrayData.sort((b:any,a:any)=>{
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      })
       //Showing the Next Prev Page Post
        this.totalPages = Math.ceil(this.newsArrayData.length / this.postsPerPage);
        this.displayedPosts = this.getPostsForCurrentPage();
        this.pageNumbers = this.generatePageNumbers();
     })
  }
  
  
  
  //Show Post Next Prev Function
  //===================================
  getPostsForCurrentPage(){
  const startIndex = (this.currentPage - 1) * this.postsPerPage;
  const endIndex = startIndex + this.postsPerPage;
  return this.newsArrayData.slice(startIndex, endIndex);
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
  
  const totalPage = Math.ceil(this.newsArrayData.length/this.postsPerPage);
  const pageNumbers = [];
  for(let i=0; i<=totalPage && i<=10; i++){
  pageNumbers.push(i);
  }
  return pageNumbers;
  }
  //=================================================
  }
  
  
  
  
