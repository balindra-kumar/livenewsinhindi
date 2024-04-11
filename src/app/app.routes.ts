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
import { NewstodayComponent } from './home/news/newstoday.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { EducationComponent } from './home/post_cat/education/education.component';
import { AboutComponent } from './home/about/about.component';
import { GameComponent } from './home/post_cat/game/game.component';
import { BlogComponent } from './home/post_cat/blog/blog.component';
import { BusinessComponent } from './home/post_cat/business/business.component';
import { ClimateComponent } from './home/post_cat/climate/climate.component';
import { EntertainmentComponent } from './home/post_cat/entertainment/entertainment.component';
import { FoodComponent } from './home/post_cat/food/food.component';
import { HealthComponent } from './home/post_cat/health/health.component';
import { JobComponent } from './home/post_cat/job/job.component';
import { LifestyleComponent } from './home/post_cat/lifestyle/lifestyle.component';
import { MarketComponent } from './home/post_cat/market/market.component';
import { MeditationComponent } from './home/post_cat/meditation/meditation.component';
import { MoviesongComponent } from './home/post_cat/moviesong/moviesong.component';
import { NewsComponent } from './home/post_cat/news/news.component';
import { PoliticsComponent } from './home/post_cat/politics/politics.component';
import { ScienceComponent } from './home/post_cat/science/science.component';
import { SoftwareComponent } from './home/post_cat/software/software.component';
import { SportsComponent } from './home/post_cat/sports/sports.component';
import { StoriesComponent } from './home/post_cat/stories/stories.component';
import { TechnologyComponent } from './home/post_cat/technology/technology.component';
import { TravelComponent } from './home/post_cat/travel/travel.component';
import { WebsiteComponent } from './home/post_cat/website/website.component';



export const routes: Routes = [
   

    {path:'', component:NewstodayComponent,
    
   children:[
   
    {path: 'contact', component:ContactComponent,data:{title:'Contact Us',meta:''}},                                                    
    {path: 'post/:id', component:PostComponent,data:{title:'',metatags:''}},
    {path: 'education', component:EducationComponent},
    {path: 'job', component:JobComponent},
    {path: 'news', component:NewsComponent},
    {path: 'travel', component:TravelComponent},
    {path: 'entertainment', component:EntertainmentComponent},
    {path: 'politics', component:PoliticsComponent},
    {path: 'market', component:MarketComponent},
    {path: 'meditation', component:MeditationComponent},
    {path: 'health', component:HealthComponent},
    {path: 'food', component:FoodComponent},
    {path: 'science', component:ScienceComponent},
    {path: 'lifestyle', component:LifestyleComponent},
    {path: 'climate', component:ClimateComponent},
    {path: 'sport', component:SportsComponent},
    {path: 'technology', component:TechnologyComponent},
    {path:'stories', component: StoriesComponent},
    {path:'stories', component: StoriesComponent},

    {path:'business', component: BusinessComponent},
    {path:'website', component: WebsiteComponent},
    {path:'moviesong', component: MoviesongComponent},
    {path:'blog', component: BlogComponent},
    {path:'game', component: GameComponent},
    {path:'software', component: SoftwareComponent},
    {path: 'about', component:AboutComponent,data:{title:'About Us',meta:''}},
   
    
   ]
  },
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