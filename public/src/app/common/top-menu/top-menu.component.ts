import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  
  constructor(private apiDataService:ApiDataService) { }
  user='../../../assets/images/user.png';

  ngOnInit(): void {
  //  console.log(localStorage.userObj);
  }
  
  

}
