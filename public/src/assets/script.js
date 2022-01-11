function playSong(id){
    DZ.player.playTracks(id);
  }

  function playPodcast(id){
    DZ.player.playPodcast(id);
  }


// // DZ.init({
// //     appId: '514702',
// //     channelUrl: 'http://localhost:5000/api/deezer/callback',
// //     player: {
// //       onload: function() {
// //         DZ.player.playTracks([654870372], true)
// //       }
// //     }
// //   })

// DZ.ready(function(sdk_options){
//     console.log('DZ SDK is ready', sdk_options);
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


// DZ.getLoginStatus(function(response) {
// 	if (response.authResponse) {
// 		console.log("logged in and connected user" + response.authResponse);
// 	} else {
// 		console.log("no user session available"  + response.authResponse);
// 	}
// });