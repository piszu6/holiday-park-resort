import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Stay } from '../model/stay';
import { Resort } from '../model/resort';
import { AppService } from '../app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() public stays: Stay[];
  @Input() public resorts: Resort[];

  public constructor(private appService: AppService) {}

  public ngOnInit(): void {}

  public ngOnChanges(): void {}
}
