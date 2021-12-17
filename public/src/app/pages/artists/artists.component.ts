import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ApiDataService} from '../../services/api-data.service'
import 'rxjs-compat/add/operator/map'
import {FormControl} from '@angular/forms'
import { UrlTree, UrlSegmentGroup, PRIMARY_OUTLET, UrlSegment, Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

// import { faUserFriends,faCompactDisc } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  
  // faUserFriends = faUserFriends;
  // faCompactDisc = faCompactDisc;
 public artist: any = [];  
  snapshotParam : any = "initial value";
  subscribedParam : any = "initial value";
  searchValue :any;
  searchName: any;
  content: any;
  public parameterValue!: string;
  constructor(private apiDataService: ApiDataService,private cd: ChangeDetectorRef,private router: Router,private readonly route: ActivatedRoute) { }
  
  ngOnInit(): void{
    this.route.queryParamMap.subscribe((queryParams) => {
     // console.log("raw param value -"+queryParams.get("artist"));
    this.content = queryParams.get("artist");
   // console.log("raw /assigned to var - " + this.content);
    this.artist = this.content;
   // console.log("decoded - "+ this.artist)
   // console.log(decodeURI(queryParams.get("artist"));
    this.reloadData(this.artist);
  });
}

 reloadData(artist:any) {
  this.apiDataService.getArtist().subscribe((artistsData)=>{
    
     this.artist = [artistsData];
     console.log("from artists page -"+this.artist);
  }
  )};

  goto(id: any): void {
    this.router.navigate(["profile", id]);
  }
}
