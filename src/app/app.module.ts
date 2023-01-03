import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule,MatButtonToggleModule,MatMenuModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule,MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { FAQComponent } from './footer/faq/faq.component';
import { SeatComponent } from './select-seat/seat.component';
import { PrinceComponent } from './movies-list/prince/prince.component';
import { BlackAdamComponent } from './movies-list/black-adam/black-adam.component';
import { HarHarMahadevComponent } from './movies-list/har-har-mahadev/har-har-mahadev.component';
import { KantharaComponent } from './movies-list/kanthara/kanthara.component';
import { NaneVaruveanComponent } from './movies-list/nane-varuvean/nane-varuvean.component';
import { OriDevudaComponent } from './movies-list/ori-devuda/ori-devuda.component';
import { RamSetuComponent } from './movies-list/ram-setu/ram-setu.component';
import { InvitationComponent } from './movies-list/invitation/invitation.component';
import { GudiComponent } from './movies-list/gudi/gudi.component';
import { Ps1Component } from './movies-list/ps1/ps1.component';
import { VasanthamComponent } from './movies-list/vasantham/vasantham.component';
import { DataService } from './service/data.service';

import { AboutUsComponent } from './footer/about-us/about-us.component';
import { BenfitsOfWatchingMoviesComponent } from './footer/benfits-of-watching-movies/benfits-of-watching-movies.component';
import { CustomerCareComponent } from './footer/customer-care/customer-care.component';
import { OfferComponent } from './offer/offer.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { TheaterListComponent } from './movies-list/theater-list/theater-list.component';



const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomepageComponent,
    ComingsoonComponent,
    BookticketsComponent,
    FAQComponent,
    SeatComponent,
    PrinceComponent,
    BlackAdamComponent,
    HarHarMahadevComponent,
    KantharaComponent,
    NaneVaruveanComponent,
    OriDevudaComponent,
    RamSetuComponent,
    InvitationComponent,
    GudiComponent,
    Ps1Component,
    VasanthamComponent,
    AboutUsComponent,
    BenfitsOfWatchingMoviesComponent,
    CustomerCareComponent,
    OfferComponent,
    NotfoundComponent,
    TheaterListComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatFormFieldModule,
   // RouterModule.forRoot([
    //   {path: 'sign-in', component:SignInComponent},
    //   {path:'home-page',component:HomepageComponent},
    //   {path: '', redirectTo: '/home-page', pathMatch: 'full'},
    //   {path:'coming-soon',component:ComingsoonComponent},
    //   {path:'book',component:BookticketsComponent},
    //  {path:'faq',component:FAQComponent},
    //  {path:'seat', component:SeatComponent},
    //  {path:'black-adam',component:BlackAdamComponent},
    //  {path:'prince',component:PrinceComponent},
    //  {path:'ps1',component:Ps1Component},
    //  {path:'harhara',component:HarHarMahadevComponent},
    //  {path:'kanthara',component:KantharaComponent},
    //  {path:'nanevaruvean',component:NaneVaruveanComponent},
    //  {path:'ori', component:OriDevudaComponent},
    //  {path:'ramsetu',component:RamSetuComponent},
    //  {path:'invitation',component:InvitationComponent},
    //  {path:'gudi',component:GudiComponent},
    //  {path:'vasantham',component:VasanthamComponent},
    //  {path:'about-us',component:AboutUsComponent},
    //  {path:'benefits-of-watching-movies',component:BenfitsOfWatchingMoviesComponent},
    // {path:'customer-care',component:CustomerCareComponent},
    //  {path:'offer',component:OfferComponent},]
   // ),
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
