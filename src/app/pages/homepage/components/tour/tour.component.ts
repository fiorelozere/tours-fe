import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourComponent implements OnInit {

  @Input() tour!: any;

  @Output() bookClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
