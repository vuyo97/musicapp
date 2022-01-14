window.dzAsyncInit = function() {
  DZ.init({
    appId  : '514702',
    channelUrl : `https://deezer-node.herokuapp.com/callback`,
    player : {
         container: 'player',
        onload : function(response){
            try{
              console.log('Player loaded !!!' + JSON.stringify(response));
              DZ.getLoginStatus();
            }catch(err){console.log(err)};
        }
    }
  });
  };
  (function() {
  var e = document.createElement('script');
  e.src = 'https://e-cdns-files.dzcdn.net/js/min/dz.js';
  e.async = true;
 // document.getElementById('dz-root').appendChild(e);
 //DZ.logout();
  console.log("logged out, sdk init and ready");;
  }());

  //var loginbtn = document.getElementById('loginbtn');
  function login(){
  localStorage.removeItem('userObj');
  DZ.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        DZ.api('/user/me', function(response) {
        //  loginbtn.value = "logout"
         // DZ.player.playAlbum(285723602,true);
          console.log(response);
          localStorage.setItem('userObj', JSON.stringify(response))
          console.log(JSON.parse(localStorage.userObj));
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {perms: 'basic_access,email'});
  }

  
DZ.getLoginStatus(function(response) {
  if (response.authResponse) {
    console.log("logged in and connected user" + response.authResponse);
  } else {
    console.log("no user session available"  + response.authResponse);
    DZ.login();
  }
});

// // DZ.init({
// //     appId: '514702',
// //     channelUrl: 'http://localhost:5000/api/deezer/callback',
// //     player: {
// //       onload: function() {
// //         DZ.player.playTracks([654870372], true)
// //       }
// //     }
// //   })

//  DZ.ready(function(sdk_options){
//      console.log('DZ SDK is ready', sdk_options);
//  });

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
