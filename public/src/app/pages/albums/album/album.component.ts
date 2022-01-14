import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id : any;
  albumdata:any;
  tracks:any=[];
  constructor(private apiDataService:ApiDataService,private router: Router,private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params)
      console.log('album')
      console.log(this.router.url.split('/')[2]);

      this.id = parseInt(this.router.url.split('/')[2]);
     // this.artist = this.content;
      this.reloadData(this.id);
    });
  }
  reloadData(albumid:any) {
    this.apiDataService.getAlbum(albumid).subscribe((albumData)=>{
      this.albumdata = [albumData];
      console.log(this.albumdata);
      this.tracks = [this.albumdata[0].data.tracks.data];
      console.log("tracks");
      console.log(this.tracks);
     })

  }
  playAlbum(){
    console.log("Play Album"+ this.id);
    DZ.player.playAlbum(this.id);
  }

  playSong(event : any){
    var idAttr = event.srcElement.attributes.id;
    var trackIndex = idAttr.nodeValue;
    
    console.log("Play Song : " + trackIndex);
    let trackArray = [];
    let album = this.tracks[0].map( (arr: { id: any; })=> arr.id);
    trackArray = [trackIndex];
    let trackList = trackArray.concat(album);
   // console.log(trackArray);
  //play selected song and add rest of the album
    DZ.player.playTracks(trackList);

    //add rest of the album to queue
    //  DZ.player.addToQueue(album);
   
  }

}
