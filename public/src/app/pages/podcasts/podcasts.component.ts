import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router, NavigationExtras } from '@angular/router';
import { exit } from 'process';
// import "@angular/router/router";
// import "angular2-navigate-with-data"

interface Ichannel{
  id : string,
  title : string,
  description: string,
  share: string,
  link: string,
  fans: string,
  picture_medium: string
}

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  constructor(private apiDataService : ApiDataService,private router: Router) { }
  
  @Input() isPodPage: boolean = true;
  podcasts: any = [];
  channels: Ichannel[] = [];
  
  public channel: any;
  
  
  ngOnInit() :void{
     this.apiDataService.getPodcasts().subscribe((podcastsData) =>{
      this.podcasts = [podcastsData];
      this.podcasts = this.podcasts[0].data.data;
      this.channels=this.podcasts[0].data;
    //  console.log(this.podcasts);
     })
  }

  toggleWithDescription(tooltip: any, description: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({ description });
    }
  }

  getToPodcast(event :any){
    var idAttr = event.srcElement.attributes.id;
    var value = idAttr.nodeValue;
  //  console.log(value)
   // console.log(this.podcasts);
   
   this.podcasts.forEach((element:any) => {
    if(element.id == value){
    console.log(element)
    this.channel=element; 
    }
   })

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "channel": btoa(unescape(JSON.stringify(this.channel)))
      }
    };

    this.router.navigate(["podcast/channel/"],  navigationExtras);
}


}
