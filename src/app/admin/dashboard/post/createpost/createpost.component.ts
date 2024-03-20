import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

declare var $: any;
@Component({
  selector: 'app-createpost',
  standalone: true,
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink,],
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {

  notAuthorized:any;
  user:any=sessionStorage.getItem("authorized")?.toString();
  logiSuccess:any = sessionStorage.getItem('Login successful')?.toString();
  authorizedUserId: any = sessionStorage.getItem('authorizedUserId')?.toString();

  post_title:any="";
  post_img:any;
  blobData:any;
  language:any='english';
  postDataArray:any =[];
  postDataUrl = "https://hindidterm.com/demo/post/read.php";
  fileSource2:any;
  warningWords:any;


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router:Router){
   
    this.http.get(this.postDataUrl,{responseType:'json'}).subscribe((data)=>{
      this.postDataArray=data;
      
      }) 
  }



  startRefresh() {
   
    $.get('https://hindidterm.com/demo/post/sitemap-generate.php', function(data:any) {
        $('#viewHere').html(data);
    });
    const targetedPageUrl = 'https://hindidterm.com/demo/post/sitemap.xml';
    //const sitemap= window.location.href = targetedPageUrl;
    const s =  document.getElementById("Mymodal");
    s?.setAttribute('style','display:block;');
    console.log("geet element",s)
     const el =document.createElement('div');
   // el.innerHTML="hi safjdlsfsd";
    let ifr = el.innerHTML+=`<iframe src='${targetedPageUrl}' width='100%' style='height:300px;overflow:auto;'></iframe>`;
    document.getElementById('datashow')?.appendChild(el);
     
    setTimeout(()=>{
      s?.removeAttribute('style');
    },3000)  
}   


  onInputPost(){

    let postValue=this.postArticle.get("post_title").value;
    let postConvertedValue=postValue!.split(' ').join('-').toLowerCase().substr(0,30);
    this.postArticle.get("post_url").setValue(postConvertedValue)
    // [value]="post_title?.split(' ')?.join('-').toLowerCase().substr(0,30)"
  }
  author_email(){
    // let usr:any =sessionStorage.getItem("user")
    // let AuthorEmailExtract =JSON.parse(usr)
    // return AuthorEmailExtract.user_email
    
  }
  
  author_name(){
    // let usr:any =sessionStorage.getItem("user")
    // let AuthorEmailExtract =JSON.parse(usr);
    // let f_name = AuthorEmailExtract.user_first_name;
    // let l_name = AuthorEmailExtract.user_last_name;
    // return f_name + ' ' + l_name;
    
  }

 // getFormattedDate() {
    // let date = new Date()
    // let fullDate =  date.toDateString();
    // let day = fullDate.substring(0,3);
    // let date1 = fullDate.substring(7,11);
    // let m = fullDate.substring(3,7);
    // let y = fullDate.substring(10,16);
  //  const time = new Date();
  //  let timeGet = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  //  return timeGet;
  //  }

  code:any;
   createCaptcha() {
    //clear the contents of captcha div first 
    let c:any = document.getElementById('captcha');
    c.innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    let ctx:any = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    this.code = captcha.join("");
    let d:any = document.getElementById("captcha");
    d.appendChild(canv); // adds the canvas to the body element
  }
  //  validateCaptcha() {
   
    
    // if (a.value == this.code) {
    //   return alert("Valid Captcha");
    //   exit();
    // }else{
    //   return alert("Invalid Captcha. try Again");
    //   // this.createCaptcha();
     
    // }
  // }
  

    
    onChange(event: any) {
      this.language=event.value;
     
      
    }

postArticle:any = new FormGroup({
  lang_cat: new FormControl('',[Validators.required]),
  post_title : new FormControl('',[Validators.required]),
  post_meta_desc : new FormControl('',[Validators.required]),
  post_meta_keyword : new FormControl('',[Validators.required]),
  post_url : new FormControl('',[Validators.required]),
  post_cat : new FormControl('',[Validators.required]),
  post_headline : new FormControl('',[Validators.required]),
  post_img : new FormControl('',[Validators.required]),
  post_desc : new FormControl('',[Validators.required]),
  post_question1 : new FormControl('',[Validators.required]),
  post_answer1 : new FormControl('',[Validators.required]),
  post_question2 : new FormControl('',[Validators.required]),
  post_answer2 : new FormControl('',[Validators.required]),
  post_question3 : new FormControl('',[Validators.required]),
  post_answer3 : new FormControl('',[Validators.required]),
  post_author : new FormControl({value: this.author_name(),disabled:true}),
  user_email: new FormControl({value:this.author_email(), disabled:true}),
  //post_day: new FormControl({value:this.getFormattedDate(),disabled:true}),
  fileSource: new FormControl('',[Validators.required]),
  fileSource2: new FormControl('')

  })
  
  get ctrl(){
  return this.postArticle.controls;
  }
  
  onSelectedFile(event:any){
  if (event.target.files && event.target.files.length > 0) {
    const img1 = (event.target.files[0] as File);
    this.postArticle.get('post_img').setValue(img1);
    
  }
  }
  
  
  onSelectedHeadline(event:any){
    if (event.target.files && event.target.files.length > 0) {
      const file = (event.target.files[0] as File);
      this.postArticle.get('fileSource').setValue(file);
    
    }
  }


  name:any;
  base64Img:any;
  loadImage(webImgePath:any) {

    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    const self = this;

   this.http.get("https://hinditerm.com/demo/post/"+webImgePath,{responseType:'blob'}).subscribe((res:Blob)=>{
    
   
    var file = new File([res], webImgePath, {
     type:res.type
    });
    this.blobData=file;
    this.image2Base64(this.blobData)
    console.log( this.image2Base64(this.blobData))
  })

}

image2Base64(imageData:Blob){
  var reader = new FileReader();
      reader.readAsDataURL(imageData); 
      reader.addEventListener("loadend", ()=> {             
          this.base64Img = reader.result;
          console.log( this.base64Img)
      });
}


postUrl = "https://hinditerm.com/demo/post/post.php";

    
ngOnInit(): void {


  if(this.logiSuccess.length==0){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  if(this.user==null || this.notAuthorized=="Not Authorized User" || this.user.length==0 || this.logiSuccess.length==0 || this.logiSuccess!=="Login successful"){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
if(this.postDataArray.length==1){
  
  //this.router.navigate(['/dashboard']);
}


this.createCaptcha()
//textarea cursor starts from left - removing whitespace 
// var txtarea:any = document.getElementById("editor_area");
// var start = txtarea.selectionStart;
// var end = txtarea.selectionEnd;
// var sel = txtarea.value.substring(start, end);
// var finText = "";
// txtarea.value = finText;
// txtarea.selectionEnd= end + 7;


let formData = new FormData();
formData.append('user_key', this.user);
formData.append('authorizedUserId',this.authorizedUserId);

// this.http.get(`http://balindra.com/post/user-read.php?user_key=${this.user}`).subscribe((res:any)=>{
 this.http.post('https://hinditerm.com/demo/post/user-read.php',formData).subscribe((res:any)=>{
 
 console.log(res.message)
  if(res.message=="Not Authorized User" || res.message=="Login failed" || res.message=="Student Record does not exist"){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  else{
    this.postDataArray=res.data[0];
    console.log("update profile data is here",this.postDataArray);

  }

  })
}

  postArticleSubmit(){
  let a:any= document.getElementById("cpatchaTextBox");
  let aValue = a.value;
  let b =this.code
  const explicitWords = /sex|sexy|xxx|porn|shemale|escort|blue|guns|bumbs|abuse|nuditity|xvideos|xvideo|naked|fucks baby|lesbian|shemale|gay|escort service/i;

   
   if (this.ctrl.lang_cat.valid==false){
    return alert("Post Language is required");
    }
  else if(this.ctrl.post_title.valid==false){
  return alert("Post Title is required");
  }
  else if(explicitWords.test(this.ctrl.post_title.value)){
    return alert("Post Title contains explicit words. Please remove them. ");
  }
  else if(this.ctrl.post_meta_desc.valid==false){
  return alert("Post Meta Description is required");
  }
  else if(explicitWords.test(this.ctrl.post_meta_desc.value)){
     return alert("Post Meta Description contains explicit words. Please remove them. ");
   }
  else if(this.ctrl.post_meta_keyword.valid==false){
  return alert("Post Meta Keyword is required");
  }
  else if(explicitWords.test(this.ctrl.post_meta_keyword.value)){
     return alert("Post Meta Keyword contains explicit words. Please remove them. ");
   }
  else if(this.ctrl.post_meta_desc.valid==false){
  return alert("Post Meta Description is required");
  }
  else if(explicitWords.test(this.ctrl.post_meta_desc.value)){
     return alert("Post Meta Description contains explicit words. Please remove them. ");
   }
   
  else if(this.ctrl.post_url.valid==false){
  return alert("Post Url is required");
  }
  else if(explicitWords.test(this.ctrl.post_url.value)){
    return alert("Post Url contains explicit words. Please remove them. ");
  }

  else if(this.ctrl.post_cat.valid==false){
  return alert("Post Category is required");
  }
  
  else if(this.ctrl.post_headline.valid==false){
  return alert("Post Headline is required");
  }
  else if(explicitWords.test(this.ctrl.post_headline.value)){
    return alert("Post Headline contains explicit words. Please remove them. ");
  }
 
  else if(this.ctrl.post_desc.valid==false){
  return alert("Post Description is required");
  }
  else if(explicitWords.test(this.ctrl.post_desc.value)){
    return alert("Post Description contains explicit words. Please remove them. ");
  }


  else if(this.ctrl.post_question1.valid==false){
  return alert("Post Question 1 is required");
  }
  else if(explicitWords.test(this.ctrl.post_question1.value)){
    return alert("Post Question 1 contains explicit words. Please remove them. ");
  }


  else if(this.ctrl.post_answer1.valid==false){
  return alert("Post Answer 1 is required");
  }
  else if(explicitWords.test(this.ctrl.post_answer1.value)){
    return alert("Post Answer 1 contains explicit words. Please remove them. ");
  }
  
  else if(this.ctrl.post_question2.valid==false){
  return alert("Post Question 2 is required");
  }
  else if(explicitWords.test(this.ctrl.post_question2.value)){
    return alert("Post  Question 2 contains explicit words. Please remove them. ");
  }

  else if(this.ctrl.post_answer2.valid==false){
  return alert("Post Answer 2 is required");
  }
  else if(explicitWords.test(this.ctrl.post_answer2.value)){
    return alert("Post  Answer 2 contains explicit words. Please remove them. ");
  }
  
  else if(this.ctrl.post_question3.valid==false){
  return alert("Post Question 3 is required");
  }
  else if(explicitWords.test(this.ctrl.post_question3.value)){
    return alert("Post Question 3contains explicit words. Please remove them. ");
  }

  else if(this.ctrl.post_answer3.valid==false){
   
     return alert("Post Answer 3 is required"); 
     
  }
  else if(explicitWords.test(this.ctrl.post_answer3.value)){
    return alert("Post  Answer 3 contains explicit words. Please remove them. ");
  }
  
  else if(aValue!==b){
    return alert("Enter The Right Captch!")
 }

 
  else if(this.postDataArray.some((isE: { post_title: any; post_url: any; post_meta_desc:any; })=>isE.post_title==this.ctrl.post_title.value || isE.post_url==this.ctrl.post_url.value || isE.post_meta_desc==this.ctrl.post_meta_desc.value)){
    return alert("data is available in my database");
    
  }
  
  else{
  
  const formData = new FormData();
  formData.append('user_key', this.user);
  formData.append('authorizedUserId',this.authorizedUserId);
  formData.append('file', this.postArticle.get('post_headline').value);
  formData.append('lang_cat', this.postArticle.controls['lang_cat'].value);
  formData.append('post_headline', this.postArticle.get('fileSource2').value);
  formData.append('post_title',this.postArticle.controls['post_title'].value);
  formData.append('post_meta_desc',this.postArticle.controls['post_meta_desc'].value);
  formData.append('post_meta_keyword',this.postArticle.controls['post_meta_keyword'].value);
  formData.append('post_url',this.postArticle.controls['post_url'].value);
  formData.append('post_cat',this.postArticle.controls['post_cat'].value);
  formData.append('post_headline',this.postArticle.controls['post_headline'].value);
  formData.append('img1',this.postArticle.get('post_img').value);
  formData.append('post_desc',this.postArticle.controls['post_desc'].value);
  formData.append('post_question1',this.postArticle.controls['post_question1'].value);
  formData.append('post_answer1',this.postArticle.controls['post_answer1'].value);
  formData.append('post_question2',this.postArticle.controls['post_question2'].value);
  formData.append('post_answer2',this.postArticle.controls['post_answer2'].value);
  formData.append('post_question3',this.postArticle.controls['post_question3'].value);
  formData.append('post_answer3',this.postArticle.controls['post_answer3'].value);
  formData.append('post_author',this.postArticle.controls['post_author'].value);

  formData.append('user_email',this.postArticle.controls['user_email'].value);

  
  this.http.post(this.postUrl,formData).subscribe((data:any)=>{
  alert("thanks your post successfully submitted !")
  this.startRefresh() 
 

  })
  }
  


       }



 
  
  htmlContent = '';
  upload:any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: '',
    //upload:(file: File) => { console.log('file', file)
     //},
    uploadWithCredentials: true,
    sanitize: false,
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: 'p',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
  
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
   
  };
  





}
