import { Component, OnInit ,ContentChild, AfterContentInit} from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc = '../../../assets/images/audio.png'  ;
  //currentUser:object;
  user:any;
  constructor(private router: Router,private readonly route: ActivatedRoute,private apiDataService:ApiDataService) { 
    
  }
  id:any;
  isAlbumsPage = false;
  isRadioPage = false;
  isPodPage = false;
  isTracksPage = false;
  toptracklist : any = [];
  toppodcasts : any = [];
  channel : any = [];
  
  
  ngOnInit(): void {
   // console.log(localStorage.userObj);
     this.user = localStorage.getItem('userObj');
     this.user = JSON.parse(this.user);

      // if user is null
      if(this.user.name == undefined || this.user.name ==  null || this.user.name.length == 0) {
        // go for login
        alert("Please log in!");
      }else {
        // redirect to home through navigateByURL()
        this.user= localStorage.getItem('userObj');
        this.user = JSON.parse(this.user);
        this.user.name = this.user.name[0].toUpperCase() + this.user.name.substring(1);
        alert("Welcome back " + this.user.name);
        console.log(this.user.name);
       //isLoggedin = true;
        
      }
  }

  playRadio(event:any){
    var idAttr = event.srcElement.attributes.id;
    var radioIndex = idAttr.nodeValue;

    console.log("Play Radio " + radioIndex);
    DZ.player.playRadio(radioIndex);
  }

  // returnPodcasts() {
  //   this.apiDataService.getChartPodcasts().subscribe((podData) =>{
  //     this.toppodcasts = [podData];
  //     console.log(this.toppodcasts);
  //    })
  //   return this.toppodcasts;
  // }

//   getToPodcast(event :any){
//     this.returnPodcasts();
//     console.log(this.toppodcasts);
//     var idAttr = event.srcElement.attributes.id;
//     var value = idAttr.nodeValue;
//     console.log(value);
    

//   //this.router.navigateByUrl('/podcast/channel', { state: { channel: this.channel } });
   
//    this.toppodcasts.forEach((element:any) => {
//     if(element.id == value){
//     console.log(element)
//     this.channel= element; 
//     }
//    })

//     let navigationExtras: NavigationExtras = {
//       queryParams: {
//           "channel": btoa(JSON.stringify(this.channel))
//       }
//     };

//     this.router.navigate(["podcast/channel/"],  navigationExtras);
// }

  returnChartTracks() {
    this.apiDataService.getToptracks().subscribe((tracksData) =>{
      this.toptracklist = [tracksData];
      console.log(this.toptracklist);
     })
    return this.toptracklist;
  }

  playTrack(event : any){
   this.returnChartTracks();
    var idAttr = event.srcElement.attributes.id;
    var trackIndex = idAttr.nodeValue;
    
    console.log("Play TopTrack : " + trackIndex);
    let trackArray = [];
    let album = this.toptracklist[0].map( (arr: { id: any; })=> arr.id);
    trackArray = [trackIndex];
    let topTrackList = trackArray.concat(album);
   // console.log(trackArray);
  //play selected song and add rest of the album
    DZ.player.playTracks(topTrackList);

    //add rest of the album to queue
    //  DZ.player.addToQueue(album);
   
  }

  
  

}
