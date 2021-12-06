import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc = '../../../assets/images/audio.png'  
 
  constructor() { }

  ngOnInit(): void {
  }

}
