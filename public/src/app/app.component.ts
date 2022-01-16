import { Component , OnInit} from '@angular/core';
import { ApiDataService } from './services/api-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'musicdb-app';
 
  constructor(private apiDataService:ApiDataService){
    this.loggedInUser = this.user;
  }

 user:any;
 loggedInUser:any={};

  ngOnInit(): void {
  // console.log(localStorage.userObj);
  this.user = localStorage.getItem('userObj');
  this.user = JSON.parse(this.user);

   // if user is null
   if(this.user.name == undefined || this.user.name ==  null || this.user.name.length == 0) {
     // go for login
     alert("Please log in!");
   }else {
     // redirect to home through navigateByURL()
     this.user= localStorage.getItem('userObj');
     this.user = JSON.parse(this.user);
     this.user.name = this.user.name[0].toUpperCase() + this.user.name.substring(1);
   //  alert("Welcome back " + this.user.name);
     this.loggedInUser = this.user;
     console.log(this.user.name);
    //isLoggedin = true;
     
   }
  }
  
 
}
