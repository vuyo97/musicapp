import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import 'rxjs-compat/add/operator/map'
import '../common/search-bar/search-bar.component'

@Injectable({
  providedIn: 'root',
})

export class ApiDataService implements OnInit {
  [x: string]: any;
  searchName : any;
  searchid : any;
  constructor(private http: HttpClient,private readonly route: ActivatedRoute,private router:Router) {
    this.toptracks = [];
  }
  ngOnInit(): void {
     // console.log(localStorage.userObj);
    //  this.user = localStorage.getItem('userObj');
    //  this.user = JSON.parse(this.user);

      // if user is null
      // if(this.user.name == undefined || this.user.name ==  null || this.user.name.length == 0) {
      //   // go for login
      //   alert("Please log in!");
      // }else {
      //   // redirect to home through navigateByURL()
      //   this.user= localStorage.getItem('userObj');
      //   this.user = JSON.parse(this.user);
      //   this.user.name = this.user.name[0].toUpperCase() + this.user.name.substring(1);
      //   alert("Welcome back " + this.user.name);
      //   this.loggedInUser = this.user;
      //   console.log(" service: "+this.user.name);
      //  //isLoggedin = true;
        
      // }
  }

   //Gets indivdual artist by name from API search
    getArtist()
    {
      this.route.queryParamMap.subscribe(queryParams => {
        console.log(queryParams);
           this.searchName = queryParams.get("artist");
           console.log('encoded : '+this.searchName)
           this.searchName = decodeURIComponent(this.searchName);
           console.log('decoced : '+this.searchName)
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
     
      return this.http.get(`/api/deezer/artistdata/${this.searchid}`).map(artistData => {
        return artistData;
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

    getArtistPlaylists(id:any)
    {
      this.route.paramMap.subscribe(params => {
        console.log(params);
           this.searchid = id;
           console.log(this.searchid)
           //this.searchid = decodeURIComponent(this.searchid);
      });
     
      return this.http.get(`/api/deezer/artist/${this.searchid}/playlists`).map(playlists => {
        return playlists;
      });
    }

    getArtistRelated(id:any)
    {
      this.route.paramMap.subscribe(params => {
        console.log(params);
           this.searchid = id;
           console.log(this.searchid)
           //this.searchid = decodeURIComponent(this.searchid);
      });
     
      return this.http.get(`/api/deezer/artist/${this.searchid}/related`).map(related => {
        return related;
      });
    }

    getArtistRadio(id:any)
    {
      this.route.paramMap.subscribe(params => {
        console.log(params);
           this.searchid = id;
           console.log(this.searchid)
           //this.searchid = decodeURIComponent(this.searchid);
      });
     
      return this.http.get(`/api/deezer/artist/${this.searchid}/radio`).map(radio => {
        return radio;
      });
    }

    // getArtistFans(id:any)
    // {
    //   this.route.paramMap.subscribe(params => {
    //     console.log(params);
    //        this.searchid = id;
    //        console.log(this.searchid)
    //        //this.searchid = decodeURIComponent(this.searchid);
    //   });
     
    //   return this.http.get(`/api/deezer/artist/${this.searchid}/fans`).map(fans => {
    //     return fans;
    //   });
    // }

  //Performs API search
    Search(query:any){
      console.log();
      return this.http.get(`/api/deezer/search/${query}`).map(artist => {
        console.log(artist);
        return artist;
      });
    }

    initRadio(){
      return this.http.get('/api/deezer/charts/radio').map(radio => {
        return radio;
       
      });
    }

    getPodcasts(){
      return this.http.get('/api/deezer/charts/podcasts').map(podcasts => {
        return podcasts;
       
      });
    }
    
    getToptracks(){
      return this.http.get( `/api/deezer/charts/tracks`).map(tracklistData => {
        return tracklistData;
       
      });
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.channelData;
  }

    getChartAlbums(){
      return this.http.get('/api/deezer/charts/albums').map(albums => {
      return albums;
       
      });
    }

    getAlbum(id:any){
      return this.http.get(`/api/deezer/album/${id}`).map(album => {
      return album;
       
      });
    }
    
    getChartArtists(){
      return this.http.get('/api/deezer/charts/artists').map(artists => {
        return artists;
       
      });
    }
    getChartPodcasts(){
      return this.http.get('/api/deezer/charts/podcasts').map(podcasts => {
        return podcasts;
       
      });
    }
    getChartTracks(){
      return this.http.get('/api/deezer/charts/tracks').map(tracks => {
        return tracks;
       
      });
    }

    login(){
      return this.http.get('/api/deezer/login').map(response => {
        return response;
       
      });

     
    }

  
  }

