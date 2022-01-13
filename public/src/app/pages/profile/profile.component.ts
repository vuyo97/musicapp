import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin, throwError ,observable } from 'rxjs';
import { TabsComponent } from '../profile/tabs/tabs.component';
import { TabComponent } from '../profile/tabs/tab.component';
import * as DZ from '@types/deezer-sdk/index';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 
  content : any;
  id : any;
  artist: any;
  artistdata: any;
  tracks : any;
  albums : any;
  related : any;
  playlists : any;
  radio : any;
  fans : any;
  
  imageSrc='../../../assets/images/user.jpg';
  constructor(private apiDataService: ApiDataService,private cd: ChangeDetectorRef,private router: Router,private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params)
      console.log('profile')
      console.log(this.router.url.split('/')[2]);

      this.id = parseInt(this.router.url.split('/')[2]);
     // this.artist = this.content;
      this.reloadData(this.id);
    });
  }

  reloadData(artist:any) {
    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        artist: this.apiDataService.getArtistData(artist).subscribe((artistData)=>{
          this.artistdata = [artistData];
          console.log(this.artistdata);
        //  console.log(' Artist : '+ JSON.stringify(this.artist));
         }),
        tracks: this.apiDataService.getArtistTracks(artist).subscribe((artistTracks)=>{
          this.tracks = [artistTracks];
          //console.log(' Tracks : '+ JSON.stringify(this.tracks));
         }),
        albums: this.apiDataService.getArtistAlbums(artist).subscribe((artistsAlbums)=>{
         this.albums = [artistsAlbums];
        //  console.log(' Albums : '+ JSON.stringify(this.albums));
        }),
        related: this.apiDataService.getArtistRelated(artist).subscribe((artistsRelated)=>{
         this.related = [artistsRelated];
        //  console.log(' Albums : '+ JSON.stringify(this.albums));
        }),
        playlists: this.apiDataService.getArtistPlaylists(artist).subscribe((artistsPlaylists)=>{
         this.playlists = [artistsPlaylists];
        //  console.log(' Albums : '+ JSON.stringify(this.albums));
        }),
        radio: this.apiDataService.getArtistPlaylists(artist).subscribe((artistsRadio)=>{
         this.radio = [artistsRadio];
        //  console.log(' Albums : '+ JSON.stringify(this.albums));
         })//,
        // fans: this.apiDataService.getArtistPlaylists(artist).subscribe((artistsFans)=>{
        //  this.fans = [artistsFans];
        // //  console.log(' Albums : '+ JSON.stringify(this.albums));
        // })
      }).subscribe(data => {
      try{console.log(data)}catch(err){
        console.log(err);
      }
    });

    }

}
