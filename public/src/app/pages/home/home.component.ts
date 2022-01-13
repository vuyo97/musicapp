import { Component, OnInit ,ContentChild, AfterContentInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc = '../../../assets/images/audio.png'  ;
 
  constructor(private router: Router,private readonly route: ActivatedRoute) { }
  isAlbumsPage = false;
  isRadioPage = false;
  isPodPage = false;
  isTracksPage = false;
  
  ngOnInit(): void {
    console.log(localStorage);
  }

  // ngAfterContentInit(){
  //   console.log(this.router.url.split('/')[2]);
  // }

}
