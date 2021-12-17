import { Component, OnInit } from '@angular/core';
//import {DZ} from '../../../assets/player/dz.js';
// const DZ = require('../../../assets/player/dz.js');
// const process= require('dotenv').config();

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {
	imageSrc='play_icon.png';

  constructor() { }

  ngOnInit(): void {
    // DZ.init({
	// 	appId  : '514702',
	// 	channelUrl :`${process.env.PORT}/api/deezer/callback`,
	// 	player : {
	// 		container: 'player',
	// 		width : 500,
	// 		height : 80,
	// 		onload : function(){console.log('Player loaded!!!')}
	// 	}
	// });
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

}
