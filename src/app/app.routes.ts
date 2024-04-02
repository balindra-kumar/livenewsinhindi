import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './admin/login/registration/registration.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegistrationotpComponent } from './admin/login/registrationotp/registrationotp.component';
import { OtpvarificationComponent } from './admin/login/otpvarification/otpvarification.component';
import { CreatepostComponent } from './admin/dashboard/post/createpost/createpost.component';
import { PostComponent } from './admin/dashboard/post/post.component';
import { UpdatepostComponent } from './admin/dashboard/post/updatepost/updatepost.component';
import { WebstoriescreateComponent } from './admin/webstories/webstoriescreate/webstoriescreate.component';
import { WebstoriesreadComponent } from './admin/webstories/webstoriesread/webstoriesread.component';
import { WebstoriesupdateComponent } from './admin/webstories/webstoriesupdate/webstoriesupdate.component';



export const routes: Routes = [
   

  
    {path: "admin", component:AdminComponent,

    children:[
        {path: "", component: LoginComponent},
        {path: "registration", component: RegistrationComponent},
        {path: "login", component: LoginComponent},
        {path: "registrationotp/:id", component: RegistrationotpComponent},
        {path: "otpvarification", component: OtpvarificationComponent},

        {path: "dashboard", component: DashboardComponent,
        children:[
            {path: "createpost", component: CreatepostComponent},
            {path: "viewpost", component: PostComponent},
            {path: "updatepost/:id", component: UpdatepostComponent},
    
            {path: "webstoriescreate", component: WebstoriescreateComponent},
            {path: "webstoriesread", component: WebstoriesreadComponent},
            {path: "webstoriesupdate/:id", component: WebstoriesupdateComponent},
        ]
        },
        
      
    ]
}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouteComponent{

}