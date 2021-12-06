/*
  // const dataObject = result.data.data[0];
 console.log(id);
    const filteredByKey = Object.fromEntries(
    Object.entries(dataObject).filter(([key, value]) => key === 'artist'))
    const artistid = filteredByKey.artist.id; 
    
    axios.get(`https://api.deezer.com/artist/${artistid}`).then(artistobj => {
     //   const {data} = artistobj;
       
        
       // console.log(data);
    }).catch(err=>{console.log(err)}); 
    axios.get(`https://api.deezer.com/artist/${artistid}/fans`).then(artistfans => {
       // const {data} = artistfans;
        artistData[fans]=artistfans.data;
        
       // console.log(data);
    }).catch(err=>{console.log(err)});  
     axios.get(`https://api.deezer.com/artist/${artistid}/top`).then(artisttracks => {
      //  const {data} = artisttracks;
        artistData[tracks]=artisttracks.data;
        
     
    }).catch(err=>{console.log(err)});  
    axios.get(`https://api.deezer.com/artist/${artistid}/albums`).then(artistalbums => {
        //const {data} = artistalbums;
        artistData[albums]=artistalbums.data;
        
    
    }).catch(err=>{console.log(err)});  
*/
    