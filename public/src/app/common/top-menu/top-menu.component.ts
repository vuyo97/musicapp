import { Component,Type} from '@angular/core';
import {ApiDataService} from '../../services/api-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Logout</h4>
    <a  class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true" style="font-size: 25px;">&times;</span>
    </a>
  </div>
  <div class="modal-body">
    <p><strong><span class="w3-text-cyan">Vuyo </span>, Are you sure you want to logout ?</strong></p>
  
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="logout()">logout</button>
  </div>
  `,
  styleUrls: ['./top-menu.component.scss']

})

export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal,private authService: AuthService) {}
  logout(){
    this.authService.logout();
  }
}



@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {
  //loggedInUser:any;
  user:any;
  loggedTitle:any;
  isLoggedIn:any;
  loggedData: any;
  closeResult = '';
   

  constructor(public apiDataService:ApiDataService,private authService: AuthService,private modalService: NgbModal) { 
    authService.getLoggedStatus.subscribe(data => this.changeLogged(data));
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

  open() {
    let user = localStorage.getItem("LoggedData");
    console.log(user);
    this.modalService.open(NgbdModalConfirm);
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  logout(){
    this.authService.logout();
  }
  
}

