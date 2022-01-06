import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response :any;
  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.apiDataService.login();
  }

}
