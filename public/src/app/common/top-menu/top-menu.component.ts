import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  //loggedInUser:any;
  user:any;
  loggedTitle:any;
  isLoggedIn:any;
  loggedData: any;
  lgData: any;
  //  @Output() public getLoggedInUser: EventEmitter<any> = new EventEmitter <any>();

  constructor(public apiDataService:ApiDataService,private authService: AuthService) { 
    authService.getLoggedStatus.subscribe(data => this.changeLogged(data));
    
   // authService.getLoggedInUser.subscribe(username => this.changeLogged(username));

  }
  userImg='../../../assets/images/user.png';
 
  ngOnInit(): void {
   /*this.lgData = localStorage.getItem('LoggedData');
 
   this.lgData = JSON.parse(this.lgData );
   console.log(this.lgData );
  if(this.lgData==true){this.isLoggedIn = this.lgData.status; this.loggedTitle = 'Logout'}else{this.isLoggedIn = this.lgData.status; this.loggedTitle = 'Login'}
  */
  }

  private changeLogged(data: any){
    //console.log(data);
    
    if(data.status == true){
      console.log("Changed loggedIn : " + JSON.stringify(data));
      this.isLoggedIn = data.status;
      this.loggedTitle = 'Logout'
      this.user = data.user;

      this.loggedData = data;
    }else{
      console.log("Changed loggedIn : " + JSON.stringify(data));
      this.loggedTitle = 'Login'
       this.user = ' ';
 
       this.loggedData = data;
    }
    localStorage.setItem("LoggedData",JSON.stringify(this.loggedData));
   // return this.loggedData;
  //   this.getLoggedInUser.subscribe((user) =>// this.username = user
  //   console.log(user)
  //  // this.useravi= username.picture_small
  //   );
   // console.log(this.username);
  }

  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
  

}
