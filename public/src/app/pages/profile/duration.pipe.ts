import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class durationPipe implements PipeTransform {
  //duration!: number;
  transform(seconds: number): string {
    // console.log('seconds :' + seconds);
    // console.log('minutes : ' + minute);
    // let duration = seconds/minute;
   
    //   let final = (Math.round(duration * 100) / 100).toFixed(2).toString();
    //   console.log('pipr result - : ' + final);
    //  // final =  final.replace('.', ':');
    //  if(parseFloat(final) > 59){
    //   return this.NumToTime(parseFloat(final));
    //  }
    // //  let time = final.toString();
    //  let time = final.replace('.', ':');
    //   return time;

    seconds = Number(seconds);;
    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
    
    if(hDisplay){
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      return hDisplay + mDisplay + sDisplay;
    }else{

      var mDisplay = m > 0 ? m + (m == 1 ? " minute " : ":") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : "") : "";
        return mDisplay + sDisplay;

      }

  }

   NumToTime(num:any) { 
    let hours = Math.floor(num / 60);  
    let minutes = (num % 60).toFixed(0);
    // if (minutes + ''.length < 2) {
    //   minutes = '0' + minutes; 
    // }
    return hours + "h " + minutes +"m";
  }

}
