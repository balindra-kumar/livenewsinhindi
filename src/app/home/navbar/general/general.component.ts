import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $:any;
@Component({
  standalone: true,
  imports:[RouterLink],
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  
  ngOnInit(): void {
    
   $(document).ready(() =>{
 
      $(".cata-sub-nav").on('scroll', () => {
          const $val = $(this).scrollLeft();
    
          if($(this).scrollLeft() + $(this).innerWidth()>=$(this)[0].scrollWidth){
              $(".nav-next").hide();
            } else {
            $(".nav-next").show();
          }
    
          if($val == 0){
            $(".nav-prev").hide();
          } else {
            $(".nav-prev").show();
          }
        });
      console.log( 'init-scroll: ' + $(".nav-next").scrollLeft() );
      $(".nav-next").on("click", function(){
        $(".cata-sub-nav").animate( { scrollLeft: '+=460' }, 200);
        
      });
      $(".nav-prev").on("click", function(){
        $(".cata-sub-nav").animate( { scrollLeft: '-=460' }, 200);
      });
    
       
   })
    
   
   }
   constructor(){
    
   }


  }


