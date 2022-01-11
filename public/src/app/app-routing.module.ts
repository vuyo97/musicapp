import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { LoginComponent } from './common/login/login.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { RadioComponent } from './pages/radio/radio.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { ChannelComponent } from './pages/podcasts/channel/channel.component';
import { AlbumComponent } from './pages/albums/album/album.component';


const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'browse' , component: BrowseComponent},
  {path:'artists' , component: ArtistsComponent},
  {path:'podcasts' , component: PodcastsComponent},
  {path:'login' , component: LoginComponent},
  {path:'profile/:id' , component: ProfileComponent},
  {path:'charts/radio' , component: RadioComponent},
  {path:'charts/tracks' , component: TracksComponent},
  {path:'charts/albums' , component: AlbumsComponent},
  {path:'album/:id' , component: AlbumComponent},
  {path:'charts/podcasts' , component: PodcastsComponent},
  {path:'podcast/channel' , component: ChannelComponent},
  {path:'charts/artists' , component: ArtistsComponent},
  {path:'/search' , component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
