import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class durationPipe implements PipeTransform {
  //duration!: number;
  transform(seconds: number, minute= 60): number {
    // console.log('seconds :' + seconds);
    // console.log('minutes : ' + minute);
    let duration = seconds/minute;
   
      const final = (Math.round(duration * 100) / 100).toFixed(2).toString()
      final.replace(".", ":");
    return parseFloat(final);
  }

}
