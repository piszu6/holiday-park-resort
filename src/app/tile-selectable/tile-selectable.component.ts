import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-tile-selectable',
  templateUrl: './tile-selectable.component.html',
  styleUrls: ['./tile-selectable.component.css'],
})
export class TileSelectableComponent implements OnInit {
  @Input() background: string;
  @Input() control: AbstractControl;
  @Input() controlName: string;
  @Input() title: string;

  public constructor() {}

  public ngOnInit(): void {
    if (this.control) {
      this.control.valueChanges.subscribe((value: any) => {});
    }
  }

  public changeSelection(): void {
    this.control.patchValue(!this.control.value);
  }
}
