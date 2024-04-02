import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink,ActivatedRoute,NavigationEnd } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  notAuthorized:any;
  user:any=sessionStorage.getItem("authorized")?.toString();
  logiSuccess:any = sessionStorage.getItem('Login successful')?.toString();
  authorizedUserId: any = sessionStorage.getItem('authorizedUserId')?.toString();
  constructor(private router: Router){}
  ngOnInit(): void {

    console.log("login", this.logiSuccess);

    if(typeof this.logiSuccess==="undefined"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
    if(this.logiSuccess.length===0){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
  
    if(typeof this.user==null || this.notAuthorized=="Not Authorized User" || this.user.length===0 || this.logiSuccess.length==0 || this.logiSuccess!=="Login successful"){
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
   
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
