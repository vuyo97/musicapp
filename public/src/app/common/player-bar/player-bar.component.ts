import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import {DZ} from '../../../assets/player/dz.js';
// const DZ = require('../../../assets/player/dz.js');
// const process= require('dotenv').config();

@Component({
  selector: 'player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {
	@Output() public getSongTitle: EventEmitter<any> = new EventEmitter <any>();
	imageSrc='play_icon.png';
	songTitle: any;
  constructor() { }

  ngOnInit(): void {
	DZ.ready((sdk_options) =>{
		console.log('DZ SDK is ready', sdk_options);
		this.onPlayerLoaded();;
	});
   }

   play(){
	// DZ.login(function(response: { authResponse: any; }) {
	// 	if (response.authResponse) {
		 // toggle.style.display = "block"
		//  login.style.display  = "none"            
		//  DZ.player.play()
	// 	} else {
	// 	  // login failed
	// 	}
	//   })
   }
  
   appendTrack(options:any) {
    var pre = document.getElementById('playerLogger');
    var line = [];
    for (var i = 0; i < arguments.length; i++) {
        line.push(arguments[i]);
    }
    console.log(line.join(' ') + "\n");
  //  pre.innerHTML += line.join(' ') + "\n";
  }

  updateSongtitle(title:any){
	console.log("updateSongtitle");
	this.songTitle = title;
  }
  
   onPlayerLoaded(){
    DZ.player.setMute(true);
   // try{
  //  $("#control a").attr('disabled', false);
    //  console.log("Player loaded !!! and sdk init and ready" + JSON.stringify(options));
      //this.appendTrack('player_loaded ' +"\n"+ JSON.stringify(options));
   // }catch(err){console.log(err)};
  
    DZ.Event.subscribe('current_track', (arg) =>{  
      console.log('current_track '+ arg.index, arg.track.title, arg.track.album.title);
      var title = arg.track.title + " \n <p><b>"+ arg.track.artist.name +"</b></p>";
	 // document.getElementById('song_title').value = title;
	 this.getSongTitle.emit(title);
	 this.getSongTitle.subscribe(data => this.updateSongtitle(data));
	 //this.songTitle = title;

    //  console.log(DZ.player.getCurrentTrack());
  
  
  });
  
  DZ.Event.subscribe('player_position', (arg) =>{
   // console.log("position" + arg[0])
    //this.appendTrack('position', arg[0], arg[1]);
    $("#slider_seek").find('.playerbar').css('width', (100*arg[0]/arg[1]) + '%');
    $("#timer_begin").html(Math.floor(arg[0] / 60) + ":" + Math.floor((arg[0] % 60 ? arg[0] % 60 : 0o00)));
    $("#timer_end").html(Math.floor(arg[1] / 60) + ":" + Math.floor((arg[1] % 60 ? arg[1] % 60 : 0o00)));
    
  });
  
  }

}
