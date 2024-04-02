import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
 
})
export class DasboardService {

  getDataUrl= "https://hinditerm.com/demo/post/read.php";

  static relatedPost: any;

  constructor(private http:HttpClient) {}

  
  //  deleteDataS(id:string){
  //   let getUrl= "https://hinditerm.com/demo/post/delete.php";
  //   const params = new HttpParams()
  //   .set('id', id.toString());
  //   return this.http.delete(`${getUrl}`, { params: params, responseType:'json' });
 
  // }

    
  // OneDataShow(id:string){
  //   let getUrl= "https://hinditerm.com/demo/post/admin-single-data.php";
  //   const params = new HttpParams()
  //   .set('id', id.toString());
  //   return this.http.get(`${getUrl}`, { params: params, responseType:'json' });
 
  // }


  singlePostRead(post_url:string){
    let getUrl= `https://hinditerm.com/demo/post/single-read.php/?post_url=${post_url}`;
    return this.http.get(getUrl);
 

    
  }

  relatedPost(post_cat:string){
    let PostGetUrl = `https://hinditerm.com/demo/post/related_post.php/?post_cat=${post_cat}`;
    //this.onEdit();
    return this.http.get(PostGetUrl);
    
  }





  
  singlePostComment(cmt_url:string){
    let CommentGetUrl = `https://hinditerm.com/demo/post/cmt-read.php/?cmt_url=${cmt_url}`;
   /// this.onEdit()
    return this.http.get(CommentGetUrl);

  }
  



 getCurrentData(id:any){
    return this.http.get(`${this.getDataUrl}/${id}`)
  }

  
  // getUpdateArticle(id:any,data:any){
  //   let getUpdateUrl = "https://hinditerm.com/demo/post/update.php?id="
  //   return this.http.post(`${getUpdateUrl}${id}`,data)
  // }


  userGetDataUrl= "https://hinditerm.com/demo/post/user-read.php";
  userGetCurrentData(user_key:any){
     return this.http.get(`${this.userGetDataUrl}/${user_key}`)
    // return this.http.post(this.userGetDataUrl,user_key);
   }

   userGetUpdate(user_id:any,data:any){
    let userGetUpdateUrl = "https://hinditerm.com/demo/post/user-update.php?user_key="
    return this.http.post(`${userGetUpdateUrl}${user_id}`,data)
  }

  getCurrentAds(id:any){
    let getSinglePostUrl="https://hinditerm.com/demo/post/ads-read.php";
     return this.http.get(`${getSinglePostUrl}/${id}`)
   }
 
  
   getCurrentAdsUpdate(id:any,data:any){
   let getAdsUpdateUrl="https://hinditerm.com/demo/post/ads-update.php?id="; 
   return this.http.post(`${getAdsUpdateUrl}${id}`,data)
   }
 
$titleObservable=new BehaviorSubject({title:""});
$title=this.$titleObservable.asObservable();

setTitle(title:string){ 
this.$titleObservable.next({title:title});
}
private metadata=new BehaviorSubject({name:"",content:""});
$metadata=this.metadata.asObservable();
setMetadata(m:any){ 
this.$titleObservable.next(m);
}

getTitle(){ 
  return this.$title;
 
}

onEdit(){
  window.scrollTo(0,0);
}



// webstoriesDService(id:string){
//   let webstoriesDurl="https://hinditerm.com/demo/post/web-stories-delete.php";
//   const params = new HttpParams().set('id',id.toString());
//   return this.http.delete(`${webstoriesDurl}`,{params:params, responseType:'json'})
// }
//webstories current data get

webstoriesGetDataUrl= "https://hinditerm.com/demo/post/webstories-read.php";
webstoriesGetCurrentData(id:any){
   return this.http.get(`${this.webstoriesGetDataUrl}/${id}`)
 }

 //webstories current data update
 webstoriesGetUpdatePost(id:any,data:any){
   let webstoriesGetUpdateUrl = "https://hinditerm.com/demo/post/webstories-update.php?id="
   return this.http.post(`${webstoriesGetUpdateUrl}${id}`,data)
 }

 singleWebStoriesRead(post_url:any){
   let getUrl= `https://hinditerm.com/demo/post/single-webstories-read.php?post_url=${post_url}`;
   return this.http.get(getUrl);
 }
 singleWebStoriesRelatedPost(web_cat:string){
   let PostGetUrl = `https://hinditerm.com/demo/post/related-webstories-read.php?web_cat=${web_cat}`;
   return this.http.get(PostGetUrl);
 }



//sessition storage
userEmail = sessionStorage.getItem("user")



}

