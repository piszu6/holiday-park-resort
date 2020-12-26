import {Pipe, PipeTransform} from '@angular/core';
import {Resort} from '../model/resort';

@Pipe({
  name: 'resort'
})
export class ResortPipe implements PipeTransform {

  transform(value: Resort): string {
    switch (value) {
      case Resort.KOLOBRZEG:
        return 'Kołobrzeg';
      case Resort.MIELNO:
        return 'Mielno';
      case Resort.NIECHORZE:
        return 'Niechorze';
      case Resort.POBIEROWO:
        return 'Pobierowo';
      case Resort.ROWY:
        return 'Rowy';
      case Resort.USTRONIE_MORSKIE:
        return 'Ustronie Morskie';
      default:
        return 'Brak nazwy';
    }
  }

}
