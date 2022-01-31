import { Injectable, Output, EventEmitter, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  lgData:any;
  resultobj:object;
  @Input() isLoggedIn: boolean;
  @Output() getLoggedStatus: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.isLoggedIn = false;
    this.resultobj= new Object();
   }

  login(){
    localStorage.removeItem('userObj');
    DZ.login((response) => {
        if (response.authResponse){
          console.log('Welcome!  Fetching your information.... ');
          DZ.api('/user/me', (response) => {
            DZ.player.playAlbum(285723602,true);
            console.log(response);
            localStorage.setItem('userObj', JSON.stringify(response));
            console.log(JSON.parse(localStorage.userObj));
            this.user = JSON.parse(localStorage.userObj);
            this.isLoggedIn = true;

            this.resultobj = {status:this.isLoggedIn , user: this.user};
            this.getLoggedStatus.emit(this.resultobj);
            console.log(this.resultobj);
          
          })
          return true;
        } else {
          console.log('User cancelled login or did not fully authorize.');
          alert('Please log in.')
          return false;
  
        }
      }/*, {perms: 'basic_access,email'})*/);
    }

  checkLogin(){
    DZ.getLoginStatus((response) => {
      console.log("Hey there , just checking if you are logged in ...")
      if (response.authResponse.accessToken) {
        this.lgData = localStorage.getItem('LoggedData');
 
        this.lgData = JSON.parse(this.lgData )
        if(this.lgData.status == true){
        this.isLoggedIn =  true;
        console.log("App innit : " + this.isLoggedIn);
        alert("Welcome back :::: " + JSON.stringify(response));
        localStorage.setItem('properties', JSON.stringify(response.authResponse));
        this.user = localStorage.getItem('userObj');
        this.user = JSON.parse(this.user);
        this.resultobj = {status : this.isLoggedIn , user : this.user};
      //  localStorage.setItem('LoggedData',JSON.stringify(this.resultobj));

        console.log(this.resultobj);
        this.getLoggedStatus.emit(this.resultobj);


        }else{
        alert("Please log into app!");
    
        this.isLoggedIn =  false;
        this.resultobj = {status : this.isLoggedIn};
        this.getLoggedStatus.emit(this.resultobj);
        console.log(this.resultobj);}
        return false;

      } else {
        // no user session available, someone you dont know
        alert("Please log in!");
    
        this.isLoggedIn =  false;
        this.resultobj ={status : this.isLoggedIn};
        this.getLoggedStatus.emit(this.resultobj);
        console.log(this.resultobj);

        return false;


        //force login
        //AuthService.login();
      }
    });

  }

  logout() : void {
       DZ.logout();
       localStorage.removeItem("userObj");
       localStorage.removeItem("properties");
       this.isLoggedIn = false;
       this.resultobj = {status  :this.isLoggedIn}
       localStorage.setItem("LoggedData",JSON.stringify(this.resultobj));

       this.getLoggedStatus.emit(this.resultobj);

       console.log("logged out " + JSON.stringify(localStorage) +"\n " + JSON.stringify(this.resultobj));
     // return this.isLoggedIn;
      document.location.href="/";
    }
}
