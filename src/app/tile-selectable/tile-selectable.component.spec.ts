import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSelectableComponent } from './tile-selectable.component';

describe('TileSelectableComponent', () => {
  let component: TileSelectableComponent;
  let fixture: ComponentFixture<TileSelectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileSelectableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
