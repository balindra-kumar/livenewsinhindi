import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

declare var $: any;

@Component({
  selector: 'app-updatepost',
  standalone: true,
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink,],
  templateUrl: './updatepost.component.html',
  styleUrl: './updatepost.component.css'
})
export class UpdatepostComponent {
  post_title:any="";
  post_img:any;
  blobData:any;
  language:any='english';
 
  postDataUrl = "http://balindra.com/post/read.php";
  fileSource2:any;
  
  notAuthorized:any;
  user:any=sessionStorage.getItem("authorized")?.toString();
  logiSuccess:any = sessionStorage.getItem('Login successful')?.toString();
  authorizedUserId: any = sessionStorage.getItem('authorizedUserId')?.toString();

  postDataArray:any = [];

  constructor(private routes:ActivatedRoute, private router: Router, private http:HttpClient){}
  userData:any;

  postDecryptedId!: any;
  updateArticle:any = new FormGroup({
  post_title : new FormControl(''),
  post_meta_desc : new FormControl(''),
  post_meta_keyword : new FormControl(''),
  post_url : new FormControl(''),
  post_cat : new FormControl(''),
  post_headline : new FormControl(''),
  post_img : new FormControl(''),
  post_desc : new FormControl(''),
  post_date : new FormControl(''),
  post_question1 : new FormControl(''),
  post_answer1 : new FormControl(''),
  post_question2 : new FormControl(''),
  post_answer2 : new FormControl(''),
  post_question3 : new FormControl(''),
  post_answer3 : new FormControl(''),
  post_author : new FormControl(''),
  fileSource: new FormControl('')

    })
   


   

    


    onSelectedFile(event:any){
      if (event.target.files && event.target.files.length > 0) {
        const img1:any = (event.target.files[0] as File);
        this.blobData=img1
        this.image2Base64(this.blobData)
      }
    }
  
    onSelectedHeadline(event:any){
      if (event.target.files && event.target.files.length > 0) {
        const file = (event.target.files[0] as File);
        this.updateArticle.get('fileSource').setValue(file);
      
      }
    }

   
    ngOnInit(): void{

      this.updateArticle = new FormGroup({
        post_title : new FormControl(''),
        post_meta_desc : new FormControl(''),
        post_meta_keyword : new FormControl(''),
        post_url : new FormControl(''),
        post_cat : new FormControl(''),
        post_headline : new FormControl(''),
        post_desc : new FormControl(''),
        post_date : new FormControl(''),
        post_question1 : new FormControl(''),
        post_answer1 : new FormControl(''),
        post_question2 : new FormControl(''),
        post_answer2 : new FormControl(''),
        post_question3 : new FormControl(''),
        post_answer3 : new FormControl(''),
        post_author : new FormControl(''),
        fileSource: new FormControl(''),
        post_img : new FormControl('')
     })
     
     
    if(this.logiSuccess.length==0){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  
    if(this.user==null || this.notAuthorized=="Not Authorized User" || this.user.length==0 || this.logiSuccess.length==0 || this.logiSuccess!=="Login successful"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  // if(this.userData.length==1){
    
    //this.router.navigate(['/dashboard']);
  //}

  let postDecryptedId=atob(this.routes.snapshot.params['id'])
  let post_id = postDecryptedId;
  this.postDecryptedId= post_id;
  let formData1 = new FormData();
  formData1.append('user_key', this.user);
  formData1.append('authorizedUserId',this.authorizedUserId);
  formData1.append('post_id',post_id)
  
   // this.http.get(`http://balindra.com/post/user-read.php?user_key=${this.user}`).subscribe((res:any)=>{
     this.http.post('http://balindra.com/post/admin-single-post-read.php',formData1).subscribe((res:any)=>{
     
     console.log(res.message)
      if(res.message=="Not Authorized User" || res.message=="Login failed" || res.message=="Student Record does not exist"){
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }
      else{
        this.postDataArray=res.data[0];
       
        console.log("sdfdsf", this.postDataArray);
      
    
    
    //  let usr:any=sessionStorage.getItem("user");
    //  let AuthorEmailExtract =JSON.parse(usr);
    //  let authorEmail =AuthorEmailExtract.user_email



    //   console.log(this.routes.snapshot.params['id']);
     
    //   let postId=this.routes.snapshot.params['id'];
    //   this.postDecryptedId=atob(postId)

    //    this.userService.getCurrentData(this.postDecryptedId).subscribe((result:any)=>{
    //     this.userData= result.find((e:any)=>{return e.id==this.postDecryptedId && authorEmail==e.author_email});
       
    console.log("all data is here",this.postDataArray);
        this.loadImage(this.postDataArray.post_img);

          this.updateArticle.controls['post_title'].setValue(this.postDataArray.post_title);
          this.updateArticle.controls['post_meta_desc'].setValue(this.postDataArray.post_meta_desc);
          this.updateArticle.controls['post_meta_keyword'].setValue(this.postDataArray.post_meta_keyword);
          this.updateArticle.controls['post_url'].setValue(this.postDataArray.post_url);
          this.updateArticle.controls['post_cat'].setValue(this.postDataArray.post_cat);
          this.updateArticle.controls['post_headline'].setValue(this.postDataArray.post_headline);
          this.updateArticle.controls['post_desc'].setValue(this.postDataArray.post_desc);
          this.updateArticle.controls['post_question1'].setValue(this.postDataArray.post_question1);
          this.updateArticle.controls['post_answer1'].setValue(this.postDataArray.post_answer1);
          this.updateArticle.controls['post_question2'].setValue(this.postDataArray.post_question2);
          this.updateArticle.controls['post_answer2'].setValue(this.postDataArray.post_answer2);
          this.updateArticle.controls['post_question3'].setValue(this.postDataArray.post_question3);
          this.updateArticle.controls['post_answer3'].setValue(this.postDataArray.post_answer3);
          this.updateArticle.controls['post_author'].setValue(this.postDataArray.post_author);
          this.updateArticle.controls['post_img'].setValue(this.postDataArray.post_img);
    
          this.routes.paramMap.subscribe((param:ParamMap)=>{
            param.get('id');
          })
    
     // })
    }
     
  })
    }


    name:any;
    base64Img:any;
    loadImage(webImgePath:any) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    const self = this;
  
    this.http.get("http://balindra.com/post/"+webImgePath,{responseType:'blob'}).subscribe((res:Blob)=>{
    console.log(res);
     
      var file = new File([res], webImgePath, {
       type:res.type
      });
      this.blobData=file;
      console.log("image data is here", file);
      this.image2Base64(this.blobData)
    })
  
  }
  
  image2Base64(imageData:Blob){
    var reader = new FileReader();
        reader.readAsDataURL(imageData); 
        reader.addEventListener("loadend", ()=> {             
            this.base64Img = reader.result;
        });
  }
  




      getUpdateArticle(){
        

        let obj={
          post_title:this.updateArticle.controls['post_title'].value,
          post_meta_desc:this.updateArticle.controls['post_meta_desc'].value,
          post_meta_keyword:this.updateArticle.controls['post_meta_keyword'].value,
          post_url:this.updateArticle.controls['post_url'].value,
          post_cat:this.updateArticle.controls['post_cat'].value,
          post_headline:this.updateArticle.controls['post_headline'].value,
          post_desc:this.updateArticle.controls['post_desc'].value,
          post_question1:this.updateArticle.controls['post_question1'].value,
          post_answer1:this.updateArticle.controls['post_answer1'].value,
          post_question2:this.updateArticle.controls['post_question2'].value,
          post_answer2:this.updateArticle.controls['post_answer2'].value,
          post_question3:this.updateArticle.controls['post_question3'].value,
          post_answer3:this.updateArticle.controls['post_answer3'].value,
          post_author:this.updateArticle.controls['post_author'].value,
          post_img:this.updateArticle.controls['post_img'].value,

        
        
        }
        const formData = new FormData();
        formData.append("post_id",this.postDecryptedId);
        formData.append('user_key', this.user);
        formData.append('authorizedUserId',this.authorizedUserId);
        formData.append('file', this.updateArticle.get('fileSource').value);
        formData.append('img1',this.blobData);
        formData.append('post_title',this.updateArticle.controls['post_title'].value);
        formData.append('post_meta_desc',this.updateArticle.controls['post_meta_desc'].value);
        formData.append('post_meta_keyword',this.updateArticle.controls['post_meta_keyword'].value);
        formData.append('post_url',this.updateArticle.controls['post_url'].value);
        formData.append('post_cat',this.updateArticle.controls['post_cat'].value);
        formData.append('post_headline',this.updateArticle.controls['post_headline'].value);
       // formData.append('post_img',this.updateArticle.controls['post_img'].value);
       
        formData.append('post_desc',this.updateArticle.controls['post_desc'].value);
        formData.append('post_question1',this.updateArticle.controls['post_question1'].value);
        formData.append('post_answer1',this.updateArticle.controls['post_answer1'].value);
        formData.append('post_question2',this.updateArticle.controls['post_question2'].value);
        formData.append('post_answer2',this.updateArticle.controls['post_answer2'].value);
        formData.append('post_question3',this.updateArticle.controls['post_question3'].value);
        formData.append('post_answer3',this.updateArticle.controls['post_answer3'].value);
        formData.append('post_author',this.updateArticle.controls['post_author'].value);
        
         this.http.post("http://balindra.com/post/update.php",formData).subscribe((updateValue:any)=>{
          console.log(updateValue,"data updated")
           alert("thanks your post successfully submitted !")
        })
      

         // console.log(obj)
        // console.log(this.routes.snapshot.params['id'],obj);
       


        
       
    }
 
    // htmlContent = '';
    // upload:any;
    // config: AngularEditorConfig = {
    //   editable: true,
    //   spellcheck: true,
    //   height: '15rem',
    //   minHeight: '5rem',
    //   placeholder: 'Enter text here...',
    //   translate: 'no',
    //   uploadUrl: '',
    //   //upload:(file: File) => { console.log('file', file)
    //    //},
    //   uploadWithCredentials: true,
    //   sanitize: false,
    //   enableToolbar: true,
    //   showToolbar: true,
    //   defaultParagraphSeparator: 'p',
    //   defaultFontName: '',
    //   defaultFontSize: '',
    //   fonts: [
    //     {class: 'arial', name: 'Arial'},
    //     {class: 'times-new-roman', name: 'Times New Roman'},
    //     {class: 'calibri', name: 'Calibri'},
    //     {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    //   ],
    
    //   customClasses: [
    //     {
    //       name: "quote",
    //       class: "quote",
    //     },
    //     {
    //       name: 'redText',
    //       class: 'redText'
    //     },
    //     {
    //       name: "titleText",
    //       class: "titleText",
    //       tag: "h1",
    //     },
    //   ]
     
    // };


    
  }



