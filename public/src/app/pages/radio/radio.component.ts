import { Component, OnInit } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service'
import 'rxjs-compat/add/operator/map'


@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  radio : any = [];
  constructor(private apiDataService: ApiDataService) { }
  imageSrc = '../../../assets/images/audio.png';  

  ngOnInit(): void {
     this.apiDataService.initRadio().subscribe((data) =>{
      console.log(data) ;
      this.radio = data;
     })

  }

}
