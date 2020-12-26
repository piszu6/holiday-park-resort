import {AccommodationType} from './accommodation-type';
import {Resort} from './resort';

export interface StayResort {
  resort: Resort;
  availabilities: Availability[];
}

export interface Availability {
  accommodationType: AccommodationType;
  number: number;
}
