import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { DasboardService } from '../../dashboard/dasboard.service';
@Component({
  standalone:true,
  selector: 'app-webstoriesupdate',
  templateUrl: './webstoriesupdate.component.html',
  styleUrls: ['./webstoriesupdate.component.css'],
  imports: [ ReactiveFormsModule,NgIf,HttpClientModule,CommonModule,RouterLink,],
})
export class WebstoriesupdateComponent {


  constructor(private userService: DasboardService, private routes: ActivatedRoute, private http: HttpClient, private router: Router) { }
  notAuthorized:any;
  user:any=sessionStorage.getItem("authorized")?.toString();
  logiSuccess:any = sessionStorage.getItem('Login successful')?.toString();
  authorizedUserId: any = sessionStorage.getItem('authorizedUserId')?.toString();
  postDecryptedId!: any;

  img_width = 100
  blobData1: any;
  blobData2: any;
  blobData3: any;
  blobData4: any;
  blobData5: any;
  blobData6: any;
  blobData7: any;
  blobData8: any;
  blobData9: any;



  getFormattedDate() {
    let date = new Date()
    let fullDate =  date.toDateString();
    let day = fullDate.substring(0,3);
    let date1 = fullDate.substring(7,11);
    let m = fullDate.substring(3,7);
    let y = fullDate.substring(10,16);
    return day+','+date1+m+y;
    }

  getFormattedTime(){
    var date = new Date();
    var time = date.toLocaleTimeString();
    return time;
  
  }



  ngOnInit(): void {

    if(this.logiSuccess.length==0){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  
    if(this.user==null || this.notAuthorized=="Not Authorized User" || this.user.length==0 || this.logiSuccess.length==0 || this.logiSuccess!=="Login successful"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }

    // console.log(this.routes.snapshot.params['id'])

    // this.userService.webstoriesGetCurrentData(this.routes.snapshot.params['id']).subscribe((result: any) => {

    //   this.userData = result.find((e: any) => { return e.id == this.routes.snapshot.params['id'] });
    //   console.log(this.userData)

    let postDecryptedId=atob(this.routes.snapshot.params['id'])
    let post_id = postDecryptedId;
    this.postDecryptedId= post_id;
    let formData1 = new FormData();
    formData1.append('user_key', this.user);
    formData1.append('authorizedUserId',this.authorizedUserId);
    formData1.append('web_id',post_id)
    
     // this.http.get(`http://balindra.com/post/user-read.php?user_key=${this.user}`).subscribe((res:any)=>{
       this.http.post('http://balindra.com/post/admin-webstories-single-data.php',formData1).subscribe((res:any)=>{
       
       console.log(res.message)
        if(res.message=="Not Authorized User" || res.message=="Login failed" || res.message=="Student Record does not exist"){
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }
        else{
          this.userData=res.data[0];
         
          console.log("sdfdsf", this.userData);
      
      this.updateWebstories.controls['web_title'].setValue(this.userData.web_title);
      this.updateWebstories.controls['web_meta_desc'].setValue(this.userData.web_meta_desc);
      this.updateWebstories.controls['web_meta_key'].setValue(this.userData.web_meta_key);
      this.updateWebstories.controls['web_date'].setValue(this.getFormattedDate());
      this.updateWebstories.controls['web_time'].setValue(this.getFormattedTime());
      this.updateWebstories.controls['web_hour'].setValue(this.userData.web_hour);

      this.updateWebstories.controls['web_heading1'].setValue(this.userData.web_heading1);
      // this.updateWebstories.controls['web_img1'].get(this.userData.web_img1);
      this.loadImage(this.userData.web_img1, 1)
      this.updateWebstories.controls['web_heading_desc1'].setValue(this.userData.web_heading_desc1);
      this.updateWebstories.controls['web_heading2'].setValue(this.userData.web_heading2);
      // this.updateWebstories.controls['web_img2'].get(this.userData.web_img2);
      this.loadImage(this.userData.web_img2, 2)

      this.updateWebstories.controls['web_heading_desc2'].setValue(this.userData.web_heading_desc2);
      this.updateWebstories.controls['web_heading3'].setValue(this.userData.web_heading3);
      // this.updateWebstories.controls['web_img3'].get(this.userData.web_img3);
      this.loadImage(this.userData.web_img3, 3)

      this.updateWebstories.controls['web_heading_desc3'].setValue(this.userData.web_heading_desc3);
      this.updateWebstories.controls['web_heading4'].setValue(this.userData.web_heading4);
      // this.updateWebstories.controls['web_img4'].get(this.userData.web_img4);
      this.loadImage(this.userData.web_img4, 4)

      this.updateWebstories.controls['web_heading_desc4'].setValue(this.userData.web_heading_desc4);
      this.updateWebstories.controls['web_heading5'].setValue(this.userData.web_heading5);
      // this.updateWebstories.controls['web_img5'].get(this.userData.web_img5);
      this.loadImage(this.userData.web_img5, 5)

      this.updateWebstories.controls['web_heading_desc5'].setValue(this.userData.web_heading_desc5);
      this.updateWebstories.controls['web_heading6'].setValue(this.userData.web_heading6);
      // this.updateWebstories.controls['web_img6'].get(this.userData.web_img6);
      this.loadImage(this.userData.web_img6, 6)

      this.updateWebstories.controls['web_heading_desc6'].setValue(this.userData.web_heading_desc6);
      this.updateWebstories.controls['web_heading7'].setValue(this.userData.web_heading7);
      // this.updateWebstories.controls['web_img7'].get(this.userData.web_img7);
      this.loadImage(this.userData.web_img7, 7)

      this.updateWebstories.controls['web_heading_desc7'].setValue(this.userData.web_heading_desc7);
      this.updateWebstories.controls['web_heading8'].setValue(this.userData.web_heading8);
      // this.updateWebstories.controls['web_img8'].get(this.userData.web_img8);
      this.loadImage(this.userData.web_img8, 8)

      this.updateWebstories.controls['web_heading_desc8'].setValue(this.userData.web_heading_desc8);
      this.updateWebstories.controls['web_heading9'].setValue(this.userData.web_heading9);
      // this.updateWebstories.controls['web_img9'].get(this.userData.web_img9);
      this.loadImage(this.userData.web_img9,9)

      this.updateWebstories.controls['web_heading_desc9'].setValue(this.userData.web_heading_desc9);
      this.routes.paramMap.subscribe((param: ParamMap) => {
        param.get('id');
      })
    }
    })

  }



  name: any;
  base64Img1: any;
  base64Img2: any;
  base64Img3: any;
  base64Img4: any;
  base64Img5: any;
  base64Img6: any;
  base64Img7: any;
  base64Img8: any;
  base64Img9: any;

  loadImage(webImgePath: any, imageNumber: number) {

    this.http.get("http://localhost:8080/api-crud/api/api-crud/post/" + webImgePath, { responseType: 'blob' }).subscribe((res: Blob) => {
      console.log(res);
      var file = new File([res], webImgePath, {
        type: res.type
      });
      
      if (imageNumber === 1) {

        this.blobData1 = file;
        this.image2Base64(this.blobData1, imageNumber)

      }
      if (imageNumber === 2) {

        this.blobData2 = file;
        this.image2Base64(this.blobData2, imageNumber)

      } 
      if (imageNumber === 3) {

        this.blobData3 = file;
      this.image2Base64(this.blobData3, imageNumber)

      }
       if (imageNumber === 4) {

        this.blobData4 = file;
      this.image2Base64(this.blobData4, imageNumber)

      } 
      if (imageNumber === 5) {

        this.blobData5 = file;
      this.image2Base64(this.blobData5, imageNumber)
      }
       if (imageNumber === 6) {

        this.blobData6 = file;
      this.image2Base64(this.blobData6, imageNumber)

      }

      if (imageNumber === 7) {

        this.blobData7 = file;
      this.image2Base64(this.blobData7, imageNumber)

      }
      if (imageNumber === 8) {

        this.blobData8 = file;
      this.image2Base64(this.blobData7, imageNumber)

      }
      if (imageNumber === 9) {

        this.blobData9 = file;
        this.image2Base64(this.blobData9, imageNumber)

      }
      console.log(file);
    })

  }

  image2Base64(imageData: Blob, imageNumber: number) {
    var reader = new FileReader();
    reader.readAsDataURL(imageData);
    reader.addEventListener("loadend", () => {
      if (imageNumber === 1) {

        this.base64Img1 = reader.result;
      }
      if (imageNumber === 2) {

        this.base64Img2 = reader.result;
      } if (imageNumber === 3) {

        this.base64Img3 = reader.result;
      } if (imageNumber === 4) {

        this.base64Img4 = reader.result;
      } if (imageNumber === 5) {

        this.base64Img5 = reader.result;
      } if (imageNumber === 6) {

        this.base64Img6 = reader.result;
      }

      if (imageNumber === 7) {

        this.base64Img7 = reader.result;
      }
      if (imageNumber === 8) {

        this.base64Img8 = reader.result;
      }
      if (imageNumber === 9) {

        this.base64Img9 = reader.result;
      }
    });
  }


  userData: any;

  updateWebstories: any = new FormGroup({
    web_title: new FormControl('', Validators.required),
    web_meta_desc: new FormControl('', Validators.required),
    web_meta_key: new FormControl('', Validators.required),
    web_date: new FormControl({ value: this.getFormattedDate(), disabled: true }),
    web_time: new FormControl({ value: this.getFormattedTime(), disabled: true }),
    web_hour: new FormControl('', Validators.required),

    web_heading1: new FormControl('', Validators.required),
    web_img1: new FormControl(''),
    web_heading_desc1: new FormControl('', Validators.required),

    web_heading2: new FormControl('', Validators.required),
    web_img2: new FormControl(''),
    web_heading_desc2: new FormControl('', Validators.required),

    web_heading3: new FormControl('', Validators.required),
    web_img3: new FormControl(''),
    web_heading_desc3: new FormControl('', Validators.required),

    web_heading4: new FormControl('', Validators.required),
    web_img4: new FormControl(''),
    web_heading_desc4: new FormControl('', Validators.required),

    web_heading5: new FormControl('', Validators.required),
    web_img5: new FormControl(''),
    web_heading_desc5: new FormControl('', Validators.required),

    web_heading6: new FormControl('', Validators.required),
    web_img6: new FormControl(''),
    web_heading_desc6: new FormControl(''),

    web_heading7: new FormControl('', Validators.required),
    web_img7: new FormControl(''),
    web_heading_desc7: new FormControl('', Validators.required),

    web_heading8: new FormControl('', Validators.required),
    web_img8: new FormControl(''),
    web_heading_desc8: new FormControl('', Validators.required),

    web_heading9: new FormControl('', Validators.required),
    web_img9: new FormControl(''),
    web_heading_desc9: new FormControl('', Validators.required),

    web_approval: new FormControl('', Validators.required)

  })


  onSelectedFile(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      debugger
      const img1 = (event.target.files[0] as File);
      this.blobData1=img1
      this.image2Base64(this.blobData1, 1)
      // this.updateWebstories.get('web_img1').setValue(img1);

      // console.log(this.updateWebstories.get('img1').value);
    }
  }

  onSelectedFile2(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img2 = (event.target.files[0] as File);
      this.blobData2=img2
      this.image2Base64(this.blobData2, 2)
      // this.updateWebstories.get('web_img2').setValue(img2);
      // console.log(this.updateWebstories.get('img2').value);
    }
  }
  onSelectedFile3(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img3 = (event.target.files[0] as File);
      this.blobData3=img3
      this.image2Base64(this.blobData3, 3)
      // this.updateWebstories.get('web_img3').setValue(img3);
      // console.log(this.updateWebstories.get('img3').value);
    }
  }
  onSelectedFile4(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img4 = (event.target.files[0] as File);
      this.blobData4=img4
      this.image2Base64(this.blobData4, 4)
      // this.updateWebstories.get('web_img4').setValue(img4);
      // console.log(this.updateWebstories.get('img4').value);
    }
  }
  onSelectedFile5(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img5 = (event.target.files[0] as File);
      this.blobData5=img5
      this.image2Base64(this.blobData5, 5)
      // this.updateWebstories.get('web_img5').setValue(img5);
      // console.log(this.updateWebstories.get('img5').value);
    }
  }
  onSelectedFile6(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img6 = (event.target.files[0] as File);
      this.blobData6=img6
      this.image2Base64(this.blobData6, 6)
      // this.updateWebstories.get('web_img6').setValue(img6);
      // console.log(this.updateWebstories.get('img6').value);
    }
  }
  onSelectedFile7(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img7 = (event.target.files[0] as File);
      this.blobData7=img7
      this.image2Base64(this.blobData7, 7)
      //this.updateWebstories.get('web_img7').setValue(img7);
      // console.log(this.updateWebstories.get('img7').value);
    }
  }
  onSelectedFile8(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img8 = (event.target.files[0] as File);
      this.blobData8=img8
      this.image2Base64(this.blobData8, 8)
      // this.updateWebstories.get('web_img8').setValue(img8);
      // console.log(this.updateWebstories.get('img8').value);
    }
  }
  onSelectedFile9(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const img9 = (event.target.files[0] as File);
      this.blobData9=img9
      this.image2Base64(this.blobData9, 9)
      // this.updateWebstories.get('web_img9').setValue(img9);
      // console.log(this.updateWebstories.get('img9').value);
    }
  }
  get ctrl() {
    return this.updateWebstories.controls
  }



  updateWebstoriesSubmit() {

    if (this.ctrl.web_title.valid == false) {
      return alert("Title Required")
    }
    else if (this.ctrl.web_meta_desc.valid == false) {
      return alert("Meta Description Required")
    }
    else if (this.ctrl.web_meta_key.valid == false) {
      return alert("Meta Keywords Required")
    }
   
    else if (this.ctrl.web_heading1.valid == false) {
      return alert("web_heading1 Required")
    }
    else if (this.ctrl.web_img1.valid == false) {
      return alert("web_img1 Required")
    }
    else if (this.ctrl.web_heading_desc1.valid == false) {
      return alert("web_heading_desc1 Required")
    }
    else if (this.ctrl.web_heading2.valid == false) {
      return alert("web_heading2 Required")
    }
    else if (this.ctrl.web_img2.valid == false) {
      return alert("web_img2 Required")
    }
    else if (this.ctrl.web_heading_desc2.valid == false) {
      return alert("web_heading_desc2 Required")
    }
    else if (this.ctrl.web_heading3.valid == false) {
      return alert("web_heading3 Required")
    }
    else if (this.ctrl.web_img3.valid == false) {
      return alert("web_img3 Required")
    }
    else if (this.ctrl.web_heading_desc3.valid == false) {
      return alert("web_heading_desc3 Required")
    }
    else if (this.ctrl.web_heading4.valid == false) {
      return alert("web_heading4 Required")
    }
    else if (this.ctrl.web_img4.valid == false) {
      return alert("web_img4 Required")
    }
    else if (this.ctrl.web_heading_desc4.valid == false) {
      return alert("web_heading_desc4 Required")
    }
    else if (this.ctrl.web_heading5.valid == false) {
      return alert("web_heading5 Required")
    }
    else if (this.ctrl.web_img5.valid == false) {
      return alert("web_img5 Required")
    }
    else if (this.ctrl.web_heading_desc5.valid == false) {
      return alert("web_heading_desc5 Required")
    }

    else if (this.ctrl.web_heading6.valid == false) {
      return alert("web_heading_desc5 Required")
    }
    else if (this.ctrl.web_img6.valid == false) {
      return alert("web_img6 Required")
    }
    else if (this.ctrl.web_heading_desc6.valid == false) {
      return alert("web_heading_desc6 Required")
    }

    else if (this.ctrl.web_heading7.valid == false) {
      return alert("web_heading7 Required")
    }
    else if (this.ctrl.web_img7.valid == false) {
      return alert("web_img7 Required")
    }
    else if (this.ctrl.web_heading_desc7.valid == false) {
      return alert("web_heading_desc7 Required")
    }

    else if (this.ctrl.web_heading8.valid == false) {
      return alert("web_heading8 Required")
    }
    else if (this.ctrl.web_img8.valid == false) {
      return alert("web_img8 Required")
    }
    else if (this.ctrl.web_heading_desc8.valid == false) {
      return alert("web_heading_desc8 Required")
    }

    else if (this.ctrl.web_heading9.valid == false) {
      return alert("web_heading9 Required")
    }
    else if (this.ctrl.web_img9.valid == false) {
      return alert("web_img9 Required")
    }
    else if (this.ctrl.web_heading_desc9.valid == false) {
      return alert("web_heading_desc9 Required")
    }
    else {
      const formData = new FormData();
      formData.append("web_id",this.postDecryptedId);
      formData.append('user_key', this.user);
      formData.append('authorizedUserId',this.authorizedUserId);
      formData.append('web_title', this.updateWebstories.controls['web_title'].value);
      formData.append('web_meta_desc', this.updateWebstories.controls['web_meta_desc'].value);
      formData.append('web_meta_key', this.updateWebstories.controls['web_meta_key'].value);
      
      formData.append('web_date', this.updateWebstories.controls['web_date'].value);
      formData.append('web_time', this.updateWebstories.controls['web_time'].value);
      formData.append('web_hour', this.updateWebstories.controls['web_hour'].value);
      formData.append('web_heading1', this.updateWebstories.controls['web_heading1'].value);

     // formData.append('img1', this.updateWebstories.get('web_img1').value);
     
      formData.append('img1',this.blobData1)
      formData.append('web_heading_desc1', this.updateWebstories.controls['web_heading_desc1'].value);
      formData.append('web_heading2', this.updateWebstories.controls['web_heading2'].value);
      //formData.append('img2', this.updateWebstories.get('web_img2').value);
      formData.append('img2',this.blobData2)
      formData.append('web_heading_desc2', this.updateWebstories.controls['web_heading_desc2'].value);
      formData.append('web_heading3', this.updateWebstories.controls['web_heading3'].value);
      //formData.append('img3', this.updateWebstories.get('web_img3').value);
     formData.append('img3',this.blobData3)
      formData.append('web_heading_desc3', this.updateWebstories.controls['web_heading_desc3'].value);
      
      formData.append('img4', this.blobData4);
      formData.append('web_heading4', this.updateWebstories.controls['web_heading4'].value);
      formData.append('web_heading_desc4', this.updateWebstories.controls['web_heading_desc4'].value);

      formData.append('web_heading5', this.updateWebstories.controls['web_heading5'].value);
      formData.append('img5',this.blobData5);
      formData.append('web_heading_desc5', this.updateWebstories.controls['web_heading_desc5'].value);

      formData.append('img6', this.blobData6);
      formData.append('web_heading6', this.updateWebstories.controls['web_heading6'].value);
      formData.append('web_heading_desc6', this.updateWebstories.controls['web_heading_desc6'].value);

      formData.append('img7', this.blobData7);
      formData.append('web_heading7', this.updateWebstories.controls['web_heading7'].value);
      formData.append('web_heading_desc7', this.updateWebstories.controls['web_heading_desc7'].value);

      formData.append('img8', this.blobData8);
      formData.append('web_heading8', this.updateWebstories.controls['web_heading8'].value);
      formData.append('web_heading_desc8', this.updateWebstories.controls['web_heading_desc8'].value);

      formData.append('img9', this.blobData9);
      formData.append('web_heading9', this.updateWebstories.controls['web_heading9'].value);
      formData.append('web_heading_desc9', this.updateWebstories.controls['web_heading_desc9'].value);
      formData.append('web_approval', this.updateWebstories.controls['web_approval'].value);

      this.http.post("http://balindra.com/post/webstories-update.php",formData).subscribe((updateValue:any)=>{
        console.log(updateValue,"data updated")
         alert("thanks your post successfully submitted !")
      })
    }

  }
}




