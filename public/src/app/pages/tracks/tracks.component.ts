import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  @Input() isTracksPage: boolean= true;
  tracklist:any;
  constructor(private apiDataService:ApiDataService) { }

  ngOnInit(): void {
    this.apiDataService.getToptracks().subscribe((tracklistData)=>{
    
      this.tracklist = [tracklistData];
      this.tracklist = this.tracklist[0].data.data;
     // console.log(this.tracklist);
   })
  }

  playTrack(event : any){
    var idAttr = event.srcElement.attributes.id;
    var trackIndex = idAttr.nodeValue;
    
    console.log("Play TopTrack : " + trackIndex);
    
    let trackArray = [];
    let topTracks = this.tracklist.map( (arr: { id: any; })=> arr.id);
    trackArray = [trackIndex];
    let topTrackList = trackArray.concat(topTracks);
   // console.log(trackArray);
  //play selected song and add rest of the album
    DZ.player.playTracks(topTrackList);

    //add rest of the album to queue
    //  DZ.player.addToQueue(album);
   
  }

}
