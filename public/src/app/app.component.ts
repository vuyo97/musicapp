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
   
  }
 

  ngOnInit(): void {
  
  }
 
}
