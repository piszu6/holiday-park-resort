import {Resort} from './resort';
import {Availability, StayResort} from './stayResort';
import {AccommodationType} from './accommodation-type';

export class Stay {
  dateFrom: Date;
  dateTo: Date;
  stayResorts: StayResort[] = [];

  public constructor(
    dateFrom: Date,
    dateTo: Date,
    resorts: Resort[],
    accommodationTypes: AccommodationType[]
  ) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;

    resorts.forEach((resort: Resort) => {
      this.stayResorts.push({
        resort,
        availabilities: this.addAvailabilities(accommodationTypes)
      });
    });
  }

  private addAvailabilities(accommodationTypes: AccommodationType[]): Availability[] {
    return accommodationTypes.map((accommodationType: AccommodationType) => {
      return {
        accommodationType,
        number: 0
      };
    });
  }
}
