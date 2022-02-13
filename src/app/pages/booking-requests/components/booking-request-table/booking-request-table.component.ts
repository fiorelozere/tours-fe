import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookingRequest} from "../../models/booking-request.model";

@Component({
  selector: 'app-booking-request-table',
  templateUrl: './booking-request-table.component.html',
  styleUrls: ['./booking-request-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingRequestTableComponent implements OnInit {

  @Input() requests: BookingRequest[] = [];
  @Input() pageNumber = 1;
  @Input() pageSize = 10;
  @Input() total = 0;
  @Output() pageChanged = new EventEmitter<any>();

  columns = ['firstName', 'lastName', 'email', 'interestedTour'];

  constructor() {
  }

  ngOnInit(): void {
  }

  paginate(event: any): void {
    this.pageChanged.emit(
      {
        pageNumber: event.pageIndex,
        pageSize: event.pageSize
      }
    )
  }
}
