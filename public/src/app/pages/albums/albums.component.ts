import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  public albums : any = [];
  constructor(private apiDataService: ApiDataService) { }

  @Input() isAlbumsPage: boolean= true;
  ngOnInit(): void {
    this.apiDataService.getChartAlbums().subscribe((albumsData)=>{
    
      this.albums = [albumsData];
      console.log(this.albums);
   }
   )
  }

  // toggleWithDescription(tooltip: any, description: string) {
  //   if (tooltip.isOpen()) {
  //     tooltip.close();
  //   } else {
  //     tooltip.open({ description });
  //   }
  // }

}
