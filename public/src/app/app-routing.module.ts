import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { LoginComponent } from './common/login/login.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { RadioComponent } from './pages/radio/radio.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'browse' , component: BrowseComponent},
  {path:'artists' , component: ArtistsComponent},
  {path:'podcasts' , component: PodcastsComponent},
  {path:'radio' , component: RadioComponent},
  {path:'login' , component: LoginComponent},
  {path:'profile/:id' , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
