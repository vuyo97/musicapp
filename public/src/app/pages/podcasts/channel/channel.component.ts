import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 //import {DZ} from '@types/deezer-sdk/index';
 //var DZ = require('../../../../assets/player/channel.html');
// var DZ = require('../../../../assets/script.js');

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  ;
  content:any;
  channel:any =[];
  
 // channelData!: Subject[];
  constructor(private apiDataService : ApiDataService,private router: Router,private readonly route: ActivatedRoute) {   
   // console.log(this.router.getCurrentNavigation().extras.state);
  }
 
   ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
  
      this.content = queryParams.get("channel");
     // console.log('channel page - '+JSON.stringify(atob(this.content)));
      this.content = atob(this.content);
      this.content = JSON.parse(this.content);
      console.log(this.content);
      this.channel = [this.content];
     // this.reloadData(this.channel);
    });
   }

   playPodcast(){
     console.log("podcast play : " + this.content.id);
     DZ.player.playPodcast(this.content.id);
   }
   

}
