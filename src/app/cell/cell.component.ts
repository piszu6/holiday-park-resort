import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Availability, StayResort } from '../model/stayResort';
import { AppService } from '../app.service';
import { DatePipe } from '@angular/common';
import {forkJoin, Observable} from 'rxjs';
import {CombineLatestOperator} from 'rxjs/internal-compatibility';
import {combineAll} from 'rxjs/operators';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit, OnChanges {
  @Input() public dateFrom: Date;
  @Input() public dateTo: Date;
  @Input() public stayResort: StayResort;

  public ready = false;

  public observables: Observable<any>[] = [];

  public constructor(
    private appService: AppService,
    private datePipe: DatePipe
  ) {}

  public ngOnInit(): void {}

  public ngOnChanges(): void {
    if (this.stayResort) {
      this.stayResort.availabilities.forEach((availability: Availability) => {
        const obs: Observable<any> = this.appService.checkAvailability(
          this.datePipe.transform(this.dateFrom, 'yyyy-LL-dd'),
          this.datePipe.transform(this.dateTo, 'yyyy-LL-dd'),
          this.stayResort.resort,
          availability.accommodationType
        );
        obs.subscribe((response: any) => {
          availability.number = response.apartments.length;
        });
        this.observables.push(obs);
        const test = forkJoin(this.observables);
        test.subscribe(() => {
          this.ready = true;
        });
      });
    }
  }
}
