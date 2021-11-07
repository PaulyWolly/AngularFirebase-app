import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { FeaturesComponent } from './pages/features/features.component';
import { VideoComponent } from './pages/video/video.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Features', component: FeaturesComponent},
  {path: 'Youtube', component: VideoComponent},
  {path: 'Newsletter', component: NewsletterComponent},
  {path: 'Contact', component: ContactComponent},
  //{path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
