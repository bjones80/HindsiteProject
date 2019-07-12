import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { YepComponent } from './yep/yep.component';
import { ContactComponent } from './contact/contact.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { HomeLandComponent } from './home/home-land/home-land.component';
import { HomeWeedControlComponent } from './home/home-weed-control/home-weed-control.component';
//import { AppRoutingModule } from './app-routing.module';
import { AboutHindsiteComponent } from './about/about-hindsite/about-hindsite.component';
import { AboutGalleryComponent } from './about/about-gallery/about-gallery.component';
import { AboutBossComponent } from './about/about-boss/about-boss.component';
import { AboutTimeLineComponent } from './about/about-time-line/about-time-line.component';
import { AboutBossGalleryComponent } from './about/about-boss-gallery/about-boss-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ReclamationComponent } from './services/reclamation/reclamation.component';
import { WeedControlComponent } from './services/weed-control/weed-control.component';
import { MonitoringComponent } from './services/monitoring/monitoring.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactMessageComponent } from './contact/contact-message/contact-message.component';
import { ContactLocatedComponent } from './contact/contact-located/contact-located.component';
import { HomeQuoteComponent } from './home/home-quote/home-quote.component';
import { PaytimeComponent } from './yep/paytime/paytime.component';
import { CalendarComponent } from './yep/calendar/calendar.component';
import { YepDefinitionComponent } from './yep/yep-definition/yep-definition.component';
import { ClientsTableComponent } from './clients/clients-table/clients-table.component';
import { ClientsLoginComponent } from './clients/clients-login/clients-login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', redirectTo: '/about/hindsite', pathMatch: 'full' },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'ourStory', component: AboutBossComponent },
      { path: 'hindsite', component: AboutHindsiteComponent },
      { path: 'timeline', component: AboutTimeLineComponent },
      { path: 'gallery', component: AboutBossGalleryComponent }
    ]
  },
  {
    path: 'services', component: ServicesComponent, children: [
      { path: 'reclamation', component: ReclamationComponent },
      { path: 'weedControl', component: WeedControlComponent },
      { path: 'monitoring', component: MonitoringComponent }
    ]
  },
  { path: 'clients', component: ClientsComponent },
  { path: 'yep', component: YepComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    YepComponent,
    ContactComponent,
    HomeGalleryComponent,
    HomeLandComponent,
    HomeWeedControlComponent,
    AboutHindsiteComponent,
    AboutGalleryComponent,
    AboutBossComponent,
    AboutTimeLineComponent,
    AboutBossGalleryComponent,
    FooterComponent,
    ReclamationComponent,
    WeedControlComponent,
    MonitoringComponent,
    ContactDetailComponent,
    ContactMessageComponent,
    ContactLocatedComponent,
    HomeQuoteComponent,
    PaytimeComponent,
    CalendarComponent,
    YepDefinitionComponent,
    ClientsTableComponent,
    ClientsLoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    //AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
