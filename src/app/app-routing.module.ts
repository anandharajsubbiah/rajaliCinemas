import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { BenfitsOfWatchingMoviesComponent } from './footer/benfits-of-watching-movies/benfits-of-watching-movies.component';
import { CustomerCareComponent } from './footer/customer-care/customer-care.component';
import { FAQComponent } from './footer/faq/faq.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlackAdamComponent } from './movies-list/black-adam/black-adam.component';
import { GudiComponent } from './movies-list/gudi/gudi.component';
import { HarHarMahadevComponent } from './movies-list/har-har-mahadev/har-har-mahadev.component';
import { InvitationComponent } from './movies-list/invitation/invitation.component';
import { KantharaComponent } from './movies-list/kanthara/kanthara.component';
import { NaneVaruveanComponent } from './movies-list/nane-varuvean/nane-varuvean.component';
import { OriDevudaComponent } from './movies-list/ori-devuda/ori-devuda.component';
import { PrinceComponent } from './movies-list/prince/prince.component';
import { Ps1Component } from './movies-list/ps1/ps1.component';
import { RamSetuComponent } from './movies-list/ram-setu/ram-setu.component';
import { VasanthamComponent } from './movies-list/vasantham/vasantham.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OfferComponent } from './offer/offer.component';
import { SeatComponent } from './select-seat/seat.component';

import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path: 'sign-in', component:SignInComponent},
      {path:'home-page',component:HomepageComponent},
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
      {path:'coming-soon',component:ComingsoonComponent},
      {path:'book',component:BookticketsComponent},
     {path:'faq',component:FAQComponent},
     {path:'seat', component:SeatComponent},
     {path:'black-adam',component:BlackAdamComponent},
     {path:'prince',component:PrinceComponent},
     {path:'ps1',component:Ps1Component},
     {path:'harhara',component:HarHarMahadevComponent},
     {path:'kanthara',component:KantharaComponent},
     {path:'nanevaruvean',component:NaneVaruveanComponent},
     {path:'ori', component:OriDevudaComponent},
     {path:'ramsetu',component:RamSetuComponent},
     {path:'invitation',component:InvitationComponent},
     {path:'gudi',component:GudiComponent},
     {path:'vasantham',component:VasanthamComponent},
     {path:'about-us',component:AboutUsComponent},
     {path:'benefits-of-watching-movies',component:BenfitsOfWatchingMoviesComponent},
    {path:'customer-care',component:CustomerCareComponent},
     {path:'offer',component:OfferComponent},
    { path: '**', pathMatch: 'full',component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
