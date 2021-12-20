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
      console.log(this.tracklist);
   }
   )
  }

}
