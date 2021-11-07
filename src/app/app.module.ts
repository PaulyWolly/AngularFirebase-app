import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { VideoComponent } from './pages/video/video.component';
import { FeaturesComponent } from './pages/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    AboutComponent,
    ContactComponent,
    NewsletterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    VideoComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
