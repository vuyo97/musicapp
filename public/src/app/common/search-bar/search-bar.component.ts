import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute , Router, UrlSegment, UrlTree, UrlSegmentGroup, PRIMARY_OUTLET } from '@angular/router'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchName = new FormControl();
  subscribedParam :any;
  
  
  results: any = [];
  translate: any;
  observer: any;

  constructor(private apiDataService:ApiDataService,private router: Router,private readonly route: ActivatedRoute,private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  search(): void{
    //this.subscribedParam = "initial value";
   
    console.log(this.searchName.value);
    this.apiDataService.Search(this.searchName.value).subscribe((resultsData)=>{
      this.results = [resultsData];
      console.log(this.results);
   
      this.router.navigate(['/artists'], { queryParams: {artist: this.searchName.value}});
     
       this.searchName.reset();
          

    })
   
    }
  

}
