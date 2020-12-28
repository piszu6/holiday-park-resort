import {AccommodationTypePipe} from './common/accommodation-type.pipe';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CellComponent} from './cell/cell.component';
import {CriteriaComponent} from './criteria/criteria.component';
import {DatePipe} from '@angular/common';
import {HelperService} from './helper.service';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ResortPipe} from './common/resort.pipe';
import {ResultsComponent} from './results/results.component';
import {TileSelectableComponent} from './tile-selectable/tile-selectable.component';
import { WeekdayPipe } from './weekday.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CriteriaComponent,
    ResortPipe,
    ResultsComponent,
    CellComponent,
    AccommodationTypePipe,
    TileSelectableComponent,
    WeekdayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HelperService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
