import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  loggedInUser:any;
  constructor(public apiDataService:ApiDataService) { }
  userImg='../../../assets/images/user.png';

  ngOnInit(): void {
    console.log(localStorage.userObj.name +localStorage.userObj.picture_small);
    this.loggedInUser = JSON.parse(localStorage.userObj);
     this.loggedInUser.name = this.loggedInUser.name[0].toUpperCase() + this.loggedInUser.name.substring(1);
     alert("Welcome back " + this.loggedInUser.name);
    // this.loggedInUser = this.user;
  }
  
  

}
