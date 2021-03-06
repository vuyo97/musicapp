import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service'
import 'rxjs-compat/add/operator/map'



@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  public radio : any = [];
  id:any;
  constructor(private apiDataService: ApiDataService) { }

  imageSrc = '../../../assets/images/audio.png';  
  @Input() isRadioPage: boolean = true;
  ngOnInit() :void{
     this.apiDataService.initRadio().subscribe((radioData) =>{
     // console.log(radioData);
      this.radio = [radioData];
     // console.log(this.radio);
     })
  }
  
  playRadio(event:any){
    var idAttr = event.srcElement.attributes.id;
    var radioIndex = idAttr.nodeValue;

    console.log("Play Radio " + radioIndex);
    DZ.player.playRadio(radioIndex);
  }
  

}
