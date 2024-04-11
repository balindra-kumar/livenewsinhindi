import { Component } from "@angular/core";
import { BehaviorSubject, delay } from "rxjs";
import { LoaderService } from "./loader.service";

@Component({
    selector:'app-loader',
    template:`

<div class="center-body" *ngIf="loading">
<div class="loader-circle-9">Loading
  <span></span>
</div>
</div>
    `,
   styles: [
   `
   .center-body {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
    position:fixed;
    z-index:1000;
	
}
.center-body {
	background: #191e2491;
}
.loader-circle-9 {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70px;
	height: 70px;
	background: transparent;
	border: 3px solid #3c3c3c;
	border-radius: 50%;
	text-align: center;
	line-height: 70px;
	font-family: sans-serif;
	font-size: 12px;
	color: #00eaff;
	text-transform: uppercase;
	box-shadow: 0 0 20px rgba(0, 0, 0, .5);
}
.loader-circle-9:before {
	content: '';
	position: absolute;
	top: -3px;
	left: -3px;
	width: 100%;
	height: 100%;
	border: 3px solid transparent;
	border-top: 3px solid #00eaff;
	border-right: 3px solid #00eaff;
	border-radius: 50%;
	animation: animateC 2s linear infinite;
}
.loader-circle-9 span {
	display: block;
	position: absolute;
	top: calc(50% - 2px);
	left: 50%;
	width: 50%;
	height: 4px;
	background: transparent;
	transform-origin: left;
	animation: animate 2s linear infinite;
}
.loader-circle-9 span:before {
	content: '';
	position: absolute;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: #00eaff;
	top: -6px;
	right: -8px;
	box-shadow: 0 0 20px #00eaff;
}
@keyframes animateC {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes animate {
	0% {
		transform: rotate(45deg);
	}
	100% {
		transform: rotate(405deg);
	}
}



   `]
})
export class LoaderComponent {

    loading: boolean = false;
  constructor(private _loaderService: LoaderService) {}

  ngOnInit() {
    // this._loaderService.loadState.subscribe(res => {
    //   this.show = res;
    // });
    this.listenToLoading();
  
  }


  
    /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
    listenToLoading(): void {
        this._loaderService.loadingSub
          .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
          .subscribe((loading:boolean) => {
            this.loading = loading;
          });
      }
}