import { Component, OnInit } from '@angular/core';
var DZ = require('node-deezer');

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    DZ.init({
		appId  : '514702',
		channelUrl : 'http://localhost:5000/browse',
		player : {
			container: 'player',
			width : 500,
			height : 80,
			onload : function(){console.log('Player loaded!!!')}
		}
	});
  }

}
