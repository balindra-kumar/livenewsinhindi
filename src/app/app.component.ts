import { Component,OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Title,Meta } from '@angular/platform-browser';
import {ActivatedRoute,NavigationEnd } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  constructor(private titleService:Title, private metaSevice:Meta, private router: Router, private activatedRoute: ActivatedRoute,  @Inject(DOCUMENT) private document:any){
  
  }
  setcolor: boolean = false;
  setClass:boolean = true;
  twoWay:any;
  ngOnInit():void{
    this.router.events.pipe(filter((event:any)=>event instanceof NavigationEnd)).subscribe(()=>{
      this.updateMetaTags();
      this.updateCanonicalUrl();
    })
    
  }

  private updateMetaTags(): void {
    const route = this.activatedRoute.firstChild;
    if (route) {
      route.data.subscribe((data) => {
        this.titleService.setTitle(data['title'] || 'Welcome to home');
        this.metaSevice.updateTag({ name: 'description', content: data['description'] || 'Welcome to home page description' });
       // Add more meta tags as needed
      });
    }
  }
  private updateCanonicalUrl():void{
    const canonicalUrl =this.router.url; 
    const head = this.document.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.document.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', canonicalUrl);

   
  }
}


