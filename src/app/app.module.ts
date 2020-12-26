import { BrowserModule } from '@angular/platform-browser';
import { DatePipe} from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from './helper.service';
import { CriteriaComponent } from './criteria/criteria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { ResortPipe } from './common/resort.pipe';
import { CellComponent } from './cell/cell.component';
import { AccommodationTypePipe } from './common/accommodation-type.pipe';
import { TileSelectableComponent } from './tile-selectable/tile-selectable.component';

@NgModule({
  declarations: [
    AppComponent,
    CriteriaComponent,
    ResortPipe,
    ResultsComponent,
    CellComponent,
    AccommodationTypePipe,
    TileSelectableComponent
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
export class AppModule { }
