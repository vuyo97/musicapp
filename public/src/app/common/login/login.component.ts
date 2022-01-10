import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response :any;
  constructor(private apiDataService: ApiDataService,private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/api/deezer/login']);
  }

}
