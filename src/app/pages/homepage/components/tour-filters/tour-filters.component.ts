import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tour-filters',
  templateUrl: './tour-filters.component.html',
  styleUrls: ['./tour-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
