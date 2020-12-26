import {Pipe, PipeTransform} from '@angular/core';
import {AccommodationType} from '../model/accommodation-type';

@Pipe({
  name: 'accommodationType'
})
export class AccommodationTypePipe implements PipeTransform {

  transform(value: AccommodationType): string {
    switch (value) {
      case AccommodationType.HOUSE:
        return 'Domek';
      case AccommodationType.APARTMENT_40:
        return 'A40';
      case AccommodationType.APARTMENT_55:
        return 'A55';
      default:
        return 'Brak nazwy';
    }
  }

}
