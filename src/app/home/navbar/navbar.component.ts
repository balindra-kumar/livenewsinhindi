import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { PostdatePipe } from '../postdate.pipe';
import { MenuComponent } from './menu/menu.component';
import { BreakingnewsComponent } from './breakingnews/breakingnews.component';
@Component({
  standalone:true,
  imports: [CommonModule, RouterLink, HttpClientModule,PostdatePipe,MenuComponent,BreakingnewsComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
