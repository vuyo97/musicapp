import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiDataService } from './services/api-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import 'rxjs-compat/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'musicdb-app';
 
  constructor(private apiDataService:ApiDataService ,private authService:AuthService){
  }
 isLoggedIn = false;
 user:any;
 //loggedInUser:any={};

  ngOnInit() {  
    DZ.init({
      appId  : '514702',
      channelUrl : `http://localhost:5000/callback`,
    //  PlayerOptions : {muted:false},
      player : {
        //  container: 'player',
        onload : function(options){
          console.log(options);
        }
        
      }
      });
   this.authService.checkLogin();
  //console.log(result);

  }

 
}
