// DZ.init({
//   appId  : '514702',
//   channelUrl : `http://localhost:5000/callback`,
//   player : {
//       //  container: 'player',
//       onload : function (response){
//         onPlayerLoaded(response);
//      }
//   }
// });


// $(document).ready(function(){
//   $(".link").click(function(){
//     $('#toggle input').prop("checked" ,false);
//     });
//   $("#control a").attr('disabled', true);
//   $("#slider_seek").click(function(evt,arg){
//       var left = evt.offsetX;
     
//       console.log(evt.offsetX, $(this).width(), evt.offsetX/$(this).width());
//      // $("#slider_seek").find('.playerbar').css('width', (100*arg[0]/arg[1]) + '%');
//       DZ.player.seek((evt.offsetX/$(this).width()) * 100);
//   });
// });

// function appendTrack() {
//   var pre = document.getElementById('playerLogger');
//   var line = [];
//   for (var i = 0; i < arguments.length; i++) {
//       line.push(arguments[i]);
//   }
//   console.log(line.join(' ') + "\n");
//   pre.innerHTML += line.join(' ') + "\n";
// }

// function onPlayerLoaded(options){
//   DZ.player.setMute(true);
//  // try{
//   $("#control a").attr('disabled', false);
//     console.log("Player loaded !!! and sdk init and ready" + JSON.stringify(options));
//     appendTrack('player_loaded ' +"\n"+ JSON.stringify(options));
//  // }catch(err){console.log(err)};

//   DZ.Event.subscribe('current_track', function(arg){  
//     console.log('current_track'+ arg.index, arg.track.title, arg.track.album.title);
//     var title = arg.track.title + " \n <p><b>"+ arg.track.artist.name +"</b></p>";
//     document.getElementById('song_title').innerHTML = title;
//     console.log(DZ.player.getCurrentTrack());


// });

// DZ.Event.subscribe('player_position', function(arg){
//  // console.log("position" + arg[0])
//   appendTrack('position', arg[0], arg[1]);
//   $("#slider_seek").find('.playerbar').css('width', (100*arg[0]/arg[1]) + '%');
//   $("#timer_begin").html(Math.floor(arg[0] / 60) + ":" + Math.floor((arg[0] % 60 ? arg[0] % 60 : '00')));
//   $("#timer_end").html(Math.floor(arg[1] / 60) + ":" + Math.floor((arg[1] % 60 ? arg[1] % 60 : '00')));
  
// });

// }
//document.addEventListener('DOMContentLoaded', function() {
//window.dzAsyncInit = function() {
  // DZ.init({
  //   appId  : '514702',
  //   channelUrl : `http://localhost:5000/callback`,
  //   player : {
  //       //  container: 'player',
  //       onload : function (response){
  //         onPlayerLoaded(response);
  //      }
  //   }
  // });
 // };
 // (function() {
  // var e = document.createElement('script');
  //  e.src = 'https://e-cdns-files.dzcdn.net/js/min/dz.js';
  //  e.async = true;

 //DZ.logout();
  //console.log("sdk init and ready");;
 //}());
//});


// function login(){
//   localStorage.removeItem('userObj');
//   DZ.login(function(response) {
//       if (response.authResponse) {
//         console.log('Welcome!  Fetching your information.... ');
//         DZ.api('/user/me', function(response) {
//          // DZ.player.playAlbum(285723602,true);
//           console.log(response);
//           localStorage.setItem('userObj', JSON.stringify(response))
//           console.log(JSON.parse(localStorage.userObj));
//         });
//       } else {
//         console.log('User cancelled login or did not fully authorize.');
//       }
//     }, {perms: 'basic_access,email'});
//   }

//   function logout(){
//     DZ.logout();
//      localStorage.removeItem("userObj");
//     console.log("logged out" + JSON.stringify(localStorage));
//     document.location.href="/";
//   }
  
// DZ.getLoginStatus(function(response) {
//   if (response.authResponse) {
//     console.log("logged in and connected user" + response.authResponse);
//   } else {
//     console.log("no user session available"  + response.authResponse);
//    // DZ.login();
//   }
// });

// DZ.init({
//     appId  : '514702',
//     channelUrl : `https://deezer-node.herokuapp.com/api/deezer/callback`,
//     player : {
//         container: 'player',
//         width : 1680,
//         height : 70,
//         onload : function(response){
//             try{
//               console.log('Player loaded!!!' + response);
//               DZ.player.playTracks([654870372], true)
//             }catch(err){console.log(err)};
// }
//     }
// })
