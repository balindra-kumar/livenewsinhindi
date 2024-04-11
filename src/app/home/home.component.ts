import { Component } from '@angular/core';
import { VerticaladsComponent } from './verticalads/verticalads.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
declare var $:any;
@Component({
  standalone:true,
  imports:[VerticaladsComponent,NavbarComponent,AsideComponent,FooterComponent,RouterOutlet],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(){
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
      $('.scrolltop').stop(true, true).fadeOut();
    }
  });
  $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");    return false})});
  
  }
}

