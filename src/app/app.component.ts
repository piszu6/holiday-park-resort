import {Component, ViewEncapsulation} from '@angular/core';
import {HelperService} from './helper.service';
import {Resort} from './model/resort';
import {AccommodationType} from './model/accommodation-type';
import {Stay} from './model/stay';
import {WEEKDAY} from './model/week-day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public stays: Stay[] = [];
  public resorts: Resort[] = [];

  public constructor(
    private helperService: HelperService
  ) {}

  public resultsPrepare(
    dateFrom: Date,
    dateTo: Date,
    resorts: Resort[],
    accommodationTypes: AccommodationType[]
  ): void {

      this.stays = [];

      const currentDate = new Date(dateFrom);
      let stayFrom: Date;
      let stayTo: Date;

      while (currentDate < dateTo) {
        stayFrom = new Date(currentDate);

        if (
          stayFrom.getDay() === WEEKDAY.SUNDAY ||
          stayFrom.getDay() === WEEKDAY.SATURDAY ||
          stayFrom.getDay() === WEEKDAY.FRIDAY
        ) {

          stayTo = new Date(stayFrom);
          stayTo.setDate(stayTo.getDate() + 7);
          this.stays.push(
            new Stay(
              stayFrom,
              stayTo,
              resorts,
              accommodationTypes
            )
          );
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
  }

  public rebuild(value: any): void {
    const resorts = Object.keys(value.resorts).map((key) => {
      if (value.resorts[key]) {
        return +key;
      }
      else {
        return null;
      }
    }).filter(resort => resort);
    this.resorts = resorts;

    const accommodationTypes = Object.keys(value.accommodationTypes).map((key) => {
      if (value.accommodationTypes[key]) {
        return +key;
      }
      else {
        return null;
      }
    }).filter(accommodationType => accommodationType);

    this.resultsPrepare(
      new Date(value.dateFrom),
      new Date(value.dateTo),
      resorts,
      accommodationTypes
    );
  }
}
