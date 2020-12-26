import { Injectable } from '@angular/core';
import {HttpClient, HttpClientXsrfModule} from '@angular/common/http';
import {Resort} from './model/resort';
import {AccommodationType} from './model/accommodation-type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public constructor(
    private httpClient: HttpClient
  ) {
  }

  public checkAvailability(
    dateFrom: string,
    dateTo: string,
    resort: Resort,
    accommodationType: AccommodationType
  ): Observable<string> {
    const body = {
      date_from: dateFrom,
      date_to: dateTo,
      resort,
      accommodation: accommodationType
    };
    return this.httpClient.post<string>(
      'https://holidaypark.pl/api/rent/available-apartments/',
      body
    );
  }

}
