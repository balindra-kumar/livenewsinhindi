import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostdatePipe } from '../../postdate.pipe';
import { TopComponent } from '../../top/top.component';
import { GeneralComponent } from '../general/general.component';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { DatePipe } from '@angular/common';
declare var $:any;
@Component({
  standalone:true,
  imports:[PostdatePipe,TopComponent,GeneralComponent,TopmenuComponent,DatePipe],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userArrayData:any=[];
  user: any; 

  currentTime: Date = new Date();
  
  currentDate:any;
  
 constructor(private router:Router){
  $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 400;
      if ($(window).scrollTop() > navHeight) {
        $('.top_main_header').addClass('fixed');
      }
      else {
        $('.top_main_header').removeClass('fixed');
      }
   });


  let user:any=sessionStorage.getItem("user");
  this.userArrayData=JSON.parse(user);
  console.log(this.userArrayData)
 
}
ngOnInit(): void {
  // Update the time every second (1000 milliseconds)
  setInterval(() => {
    this.currentTime = new Date();
  }, 1000);

  // Create a new Date object to get the current date
const currentDate = new Date();

// Get the year, month, and date from the Date object
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Adding 1 to get the correct month (January is 0)
const date = currentDate.getDate();

// Format the month and date to add leading zeros if needed
const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDate = date < 10 ? `0${date}` : date;
this.currentDate = `${formattedDate}-${formattedMonth}-${year}`;
}


}
