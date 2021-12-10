import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'

import 'rxjs-compat/add/operator/map'
import '../common/search-bar/search-bar.component'


export class ApiDataService {
  [x: string]: any;
  searchName : any;
  searchid : any;
  constructor(private http: HttpClient,private readonly route: ActivatedRoute,private router:Router) {
  }

   //Gets indivdual artist by name from API search
    getArtist()
    {
      this.route.queryParamMap.subscribe(queryParams => {
        console.log(queryParams);
           this.searchName = queryParams.get("artist");
           this.searchName = decodeURIComponent(this.searchName);
           console.log(this.searchName)
      });
     
      return this.http.get(`/api/deezer/artist/${this.searchName}`).map(artist => {
        return artist;
      });
    }

    getArtistData(id:any)
    {
      this.route.paramMap.subscribe(params => {
        console.log(params);
           this.searchid = id;
           console.log(this.searchid)
           //this.searchid = decodeURIComponent(this.searchid);
      });
     
      return this.http.get(`/api/deezer/artist/${this.searchid}`).map(artist => {
        return artist;
      });
    }

    getArtistAlbums(id:any)
    {
      this.route.paramMap.subscribe(params => {
        console.log(params);
           this.searchid = id;
           console.log(this.searchid)
           //this.searchid = decodeURIComponent(this.searchid);
      });
     
      return this.http.get(`/api/deezer/artist/${this.searchid}/albums`).map(artist => {
        return artist;
      });
    }

    
    getArtistTracks(id:any)
    {
      this.route.paramMap.subscribe(params => {
        console.log(params);
           this.searchid = id;
           console.log(this.searchid)
           //this.searchid = decodeURIComponent(this.searchid);
      });
     
      return this.http.get(`/api/deezer/artist/${this.searchid}/top`).map(tracks => {
        return tracks;
      });
    }

  //Performs API search
    Search(query:any){
      console.log();
      return this.http.get(`/api/deezer/search/${query}`).map(artist => {
        console.log(artist);
        return artist;
      });
    }

    initRadio(){
      return this.http.get('/api/radio/').map(radio => {
        return radio;
       
      });

     
    }

  
  }

