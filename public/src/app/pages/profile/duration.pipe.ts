import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class durationPipe implements PipeTransform {
  //duration!: number;
  transform(seconds: number, minute= 60): string {
    // console.log('seconds :' + seconds);
    // console.log('minutes : ' + minute);
    let duration = seconds/minute;
   
      let final = (Math.round(duration * 100) / 100).toFixed(2).toString()
      console.log('pipr result - : ' + final);
      final =  final.replace('.', ':');
    return final;
  }

}
