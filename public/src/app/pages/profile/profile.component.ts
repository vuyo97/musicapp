import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin, throwError ,observable } from 'rxjs';
import { TabsComponent } from '../profile/tabs/tabs.component';
import { TabComponent } from '../profile/tabs/tab.component';
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
          this.tracks = this.tracks[0].data.data;
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
         this.playlists = this.playlists[0].data.data;
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

    playSong(event : any){
      var idAttr = event.srcElement.attributes.id;
      var trackIndex = idAttr.nodeValue;
      
      console.log("Play Song : " + trackIndex);
      let trackArray = [];
      let album = this.tracks.map( (arr: { id: any; })=> arr.id);
      trackArray = [trackIndex];
      let trackList = trackArray.concat(album);
     // console.log(trackArray);
    //play selected song and add rest of the album
      DZ.player.playTracks(trackList);
  
      //add rest of the album to queue
      //  DZ.player.addToQueue(album);
     
    }

    playPlaylist(event:any){
      var idAttr = event.srcElement.attributes.id;
      var playlistIndex = idAttr.nodeValue;

      console.log("Play Playlist : " + playlistIndex);
      DZ.player.playPlaylist(playlistIndex);
    }

    playMix(){
      console.log("Mix");
      let trackArray = this.tracks.map( (arr: { id: any; })=> arr.id)
      console.log(trackArray);
      DZ.player.playTracks(trackArray);
      DZ.player.setShuffle(true);
    }

   
}
