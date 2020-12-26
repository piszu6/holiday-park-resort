import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Resort } from '../model/resort';
import { AccommodationType } from '../model/accommodation-type';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css'],
})
export class CriteriaComponent implements OnInit {
  public accommodationTypes: FormGroup;
  public form: FormGroup;
  public resorts: FormGroup;

  public readonly Resort = Resort;
  public readonly AccommodationType = AccommodationType;
  public readonly resortsMap = new Map<Resort, object>();
  public readonly accommodationTypeMap = new Map<AccommodationType, object>();

  @Output() public formEmitter: EventEmitter<any> = new EventEmitter();

  public constructor() {
    this.resortsMap.set(Resort.POBIEROWO, {
      background: 'assets/pics/pobierowo.png',
    });
    this.resortsMap.set(Resort.KOLOBRZEG, {
      background: 'assets/pics/kolobrzeg.png',
    });
    this.resortsMap.set(Resort.ROWY, { background: 'assets/pics/rowy.png' });
    this.resortsMap.set(Resort.NIECHORZE, {
      background: 'assets/pics/niechorze.png',
    });
    this.resortsMap.set(Resort.USTRONIE_MORSKIE, {
      background: 'assets/pics/ustronie_morskie.png',
    });
    this.resortsMap.set(Resort.MIELNO, {
      background: 'assets/pics/mielno.png',
    });

    this.accommodationTypeMap.set(AccommodationType.HOUSE, {
      background: 'assets/pics/house.png',
    });
    this.accommodationTypeMap.set(AccommodationType.APARTMENT_40, {
      background: 'assets/pics/apartment-40.png',
    });
    this.accommodationTypeMap.set(AccommodationType.APARTMENT_55, {
      background: 'assets/pics/apartment-55.png',
    });

    this.form = new FormGroup({});
    this.form.addControl('dateFrom', new FormControl('2021-05-01'));
    this.form.addControl('dateTo', new FormControl('2021-05-31'));

    this.resorts = new FormGroup({});
    this.resorts.addControl(
      Resort.USTRONIE_MORSKIE.toString(),
      new FormControl(false)
    );
    this.resorts.addControl(Resort.KOLOBRZEG.toString(), new FormControl(false));
    this.resorts.addControl(Resort.POBIEROWO.toString(), new FormControl(true));
    this.resorts.addControl(Resort.ROWY.toString(), new FormControl(false));
    this.resorts.addControl(Resort.NIECHORZE.toString(), new FormControl(false));
    this.resorts.addControl(Resort.MIELNO.toString(), new FormControl(false));

    this.accommodationTypes = new FormGroup({});
    this.accommodationTypes.addControl(
      AccommodationType.HOUSE.toString(),
      new FormControl(true)
    );
    this.accommodationTypes.addControl(
      AccommodationType.APARTMENT_40.toString(),
      new FormControl(false)
    );
    this.accommodationTypes.addControl(
      AccommodationType.APARTMENT_55.toString(),
      new FormControl(false)
    );

    this.form.addControl('resorts', this.resorts);
    this.form.addControl('accommodationTypes', this.accommodationTypes);
  }

  public ngOnInit(): void {}

  public clicked(): void {
    this.formEmitter.emit(this.form.value);
  }
}
