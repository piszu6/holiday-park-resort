import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekday'
})
export class WeekdayPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Monday':
        return 'Poniedziałek';
      case 'Tuesday':
        return 'Wtorek';
      case 'Wednesday':
        return 'Środa';
      case 'Thursday':
        return 'Czwartek';
      case 'Friday':
        return 'Piątek';
      case 'Saturday':
        return 'Sobota';
      default:
        return 'Niedziela';
    }
  }

}
