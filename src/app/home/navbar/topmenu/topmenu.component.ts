import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $:any
@Component({
  standalone:true,
  imports: [RouterLink],
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent {
ngOnInit():void{
  $(document).ready(function(){
    $('.nav-link').click(function(){
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      })
    })
  })
}
}

