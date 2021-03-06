import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { QueBarComponent } from './common/que-bar/que-bar.component';
import { PlayerBarComponent } from './common/player-bar/player-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ApiDataService } from './services/api-data.service';
import { AuthService } from './services/auth.service';
//import { LoginComponentModal } from './common/login/login.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { RadioComponent } from './pages/radio/radio.component';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { durationPipe } from './pages/profile/duration.pipe';
import { TabsComponent } from './pages/profile/tabs/tabs.component';
import { TabComponent } from './pages/profile/tabs/tab.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { SearchComponent } from './pages/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {LoginComponentModal} from './common/login/login.component';

import { ChannelComponent } from './pages/podcasts/channel/channel.component';
import { AlbumComponent } from './pages/albums/album/album.component';
import 'animate.css';

// import { FontAwesomeModule, FaIconLibrary ,FaConfig } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    QueBarComponent,
    PlayerBarComponent,
    HomeComponent,
    BrowseComponent,
    ArtistsComponent,
   // LoginComponentModal,
    PodcastsComponent,
    RadioComponent,
    SearchBarComponent,
    ProfileComponent,
    durationPipe,
    TabsComponent,
    TabComponent,
    AlbumsComponent,
    TracksComponent,
    SearchComponent,
    ChannelComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
   // FontAwesomeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ApiDataService,AuthService],
  exports:[TopMenuComponent],
  bootstrap: [AppComponent,TopMenuComponent]
  
})
export class AppModule { 
  // constructor(library: FaIconLibrary,faConfig: FaConfig) {
  //   library.addIconPacks(fas);
  //   faConfig.fixedWidth = true;
  //   faConfig.defaultPrefix = 'far';
  // }
}
