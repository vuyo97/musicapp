// DZ.init({
//     appId: '514702',
//     channelUrl: 'http://localhost:5000/api/deezer/callback',
//     player: {
//       onload: function() {
//         DZ.player.playTracks([654870372], true)
//       }
//     }
//   })

//DZ.ready(function(){
  
DZ.init({
    appId  : '514702',
    channelUrl : `http://localhost:5000/api/deezer/callback`,
    player : {
        container: 'player',
        width : 1680,
        height : 70,
//         onload : function(){
//             try{
//                  console.log('Player loaded!!!');
//               // DZ.player.playTracks([654870372], true)
//             }catch(err){console.log(err)};
// }
    }
})
//});