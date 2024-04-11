import { Component,Inject, OnInit } from '@angular/core';
import { allStoryPage, ampStoryTemplate} from './ampStories/amp-stories-template';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/admin/vertical/dashboard/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-webstories',
  templateUrl: './webstories.component.html',
  styleUrls: ['./webstories.component.css']
})
export class WebstoriesComponent implements OnInit {
  storiesArray: any = [];
  storyPageNext!: any;
  storyPage!: string
  tag!: string;
  url: any;
  hideShowButton:boolean=true;
  webCategoryCode!:string;
  relatedPostArray:any = [];
  allpostArray: any = []; 
  allPostUrl = "http://balindra.com/post/webstories-read.php";
  arrayData: any;
  reference: any = this.allpostArray
  constructor(private http: HttpClient,
    private userService: UserService,
    private routes: ActivatedRoute,
    @Inject(DOCUMENT) private doc: any,
    private metaService: Meta,
    private _location: Location,
    
  ) {


  }


  ngOnInit() {
    this.routes.paramMap.subscribe((param: ParamMap) => {
     
      let url: any = param.get('id');
      this.userService.singleWebStoriesRead(url).subscribe((data: any) => {
      this.storiesArray = data;
      this.storiesArray= this.storiesArray.sort((b:any,a:any)=>{
        return new Date(b.post_update_date) < new Date(a.post_update_date);
      })
      //this.webCategoryCode=url.split("-")[0];
      this.webCategoryCode=this.storiesArray[0].web_cat
      console.log(this.webCategoryCode);
      this.getSinglePost(url);
     
    })
})

    
  

  
      //for next and previous post all deta fetch
       
      this.http.get(this.allPostUrl,{responseType:'json'}).subscribe((data:any)=>{
        this.allpostArray  = data.filter((postArrayUsingWebCate:any)=>postArrayUsingWebCate.web_cat==this.webCategoryCode)
        console.log(this.allpostArray);
        
      })
     
     
      
  }

getId(){
  setInterval(()=>{
    let x:any=document.getElementById("page12");
    
    this.hideShowButton=x?.hasAttribute("active");
   
  },500)
  
}
  
getSinglePost(url:any){
  this.userService.singleWebStoriesRead(url).subscribe((data: any) => {
  
    this.storiesArray = data;
    console.log(this.storiesArray);
    this.getId();

     //For Next Slide One Post


     
    let nextObj=this.allpostArray[this.currentIndexToShow+1];
    if(nextObj){   
      this.storiesArray[0].web_dateNext=nextObj.web_date; 
      this.storiesArray[0].web_timePub=nextObj.web_time; 
      this.storiesArray[0].web_heading10=nextObj.web_heading1;
      this.storiesArray[0].web_heading_desc10=nextObj.web_heading_desc1; 
      this.storiesArray[0].web_heading_web_img10=nextObj.web_img1;     
      this.storiesArray[0].web_timeNext=nextObj.web_time; 
      this.storiesArray[0].web_titleNext=nextObj.web_title; 
    }else{
    
    }


    this.storyPage = allStoryPage(this.storiesArray)
    //this.storyPageNext = storeyNext(this.storiesArray)
    this.tag = ampStoryTemplate(this.storyPage)
   // let s = document.getElementById("amp");
    let s:any = document.getElementById("pageSection");
    s.innerHTML=this.tag;
   

    let title = this.storiesArray[0].web_title
    
    this.metaService.updateTag({ name: 'description', content: this.storiesArray[0].web_meta_desc });
    this.metaService.updateTag({ name: 'keywords', content: this.storiesArray[0].web_meta_key });
    this.metaService.updateTag({ name: 'author', content: this.storiesArray[0].web_author });

    this.metaService.updateTag({ property: 'og:title', content: this.storiesArray[0].web_title });
    this.metaService.updateTag({ property: 'og:description', content: this.storiesArray[0].web_meta_desc });
    this.metaService.updateTag({ name: 'website', property: 'og:type' });
    this.metaService.updateTag({ property: 'og:url', content: window.location.href });
    this.metaService.updateTag({ property: 'og:image', content: 'http://balindra.com/post/' + this.storiesArray[0].web_img1 });
    this.metaService.updateTag({ name: 'twitter:url', content: window.location.href });
    this.metaService.updateTag({ name: 'twitter:title', content: this.storiesArray[0].web_title });
    this.metaService.updateTag({ name: 'twitter:image', content: 'http://balindra.com/post/' + this.storiesArray[0].web_img1 });
    this.metaService.updateTag({ property: 'twitter:description', content: this.storiesArray[0].web_heading_desc1 });
    this.updateCanonicalUrl();

    this.userService.setTitle(title);
    
  })
}


  updateCanonicalUrl() {
    const head = this.doc.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.doc.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.doc.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', window.location.href)

  }



  currentIndexToShow: number = 0;
  
  prevPost() {
    this.currentIndexToShow--;
    if (this.currentIndexToShow < 0) {
      this.currentIndexToShow = 0;
    }
    if (this.currentIndexToShow > this.allpostArray.length) {
      this.currentIndexToShow = this.allpostArray.length;
    }
    if (this.currentIndexToShow >= 0 && this.currentIndexToShow < this.allpostArray.length) {
      this.reference = this.allpostArray[this.currentIndexToShow];
      this.arrayData = [];
      this.arrayData.push(this.reference);
      let url = this.reference.web_link;
      this.getSinglePost(url)
      // this.getRelatedPost(url);
      this.updateUrl(url)
      console.log(this.reference = this.allpostArray[this.currentIndexToShow])
      
    }
  }
  updateUrl(url: string) {
    this._location.go(url)
  }



   NextPost() {
    this.currentIndexToShow++;
    if (this.currentIndexToShow < 0) {
      this.currentIndexToShow = 0;
    }
    if (this.currentIndexToShow > this.allpostArray.length) {
      this.currentIndexToShow = this.allpostArray.length;
    }
    if (this.currentIndexToShow >= 0 && this.currentIndexToShow < this.allpostArray.length) {

      this.reference = this.allpostArray[this.currentIndexToShow];
      this.arrayData = [];
      this.arrayData.push(this.reference);
      let url = this.reference.web_link;
      this.getSinglePost(url)

      // this.getRelatedPost(url)
      this.updateUrl(url)

      console.log(this.reference = this.allpostArray[this.currentIndexToShow])
     
    }
  }
}
