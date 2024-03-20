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

export const routes: Routes = [
   

    {path: "registration", component: RegistrationComponent},
    {path: "login", component: LoginComponent},
    {path: "registrationotp/:id", component: RegistrationotpComponent},
    {path: "otpvarification", component: OtpvarificationComponent},
    {path: "admin", component:AdminComponent,

    children:[
        {path: "dashboard", component: DashboardComponent},
        {path: "createpost", component: CreatepostComponent},
        {path: "viewpost", component: PostComponent},
        {path: "updatepost/:id", component: UpdatepostComponent}
    ]
}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouteComponent{

}