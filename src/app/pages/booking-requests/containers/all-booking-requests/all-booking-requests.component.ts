import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BookingRequestsParams, BookingRequestsStore} from "../../services/booking-requests.store";

@Component({
  selector: 'app-all-booking-requests',
  templateUrl: './all-booking-requests.component.html',
  styleUrls: ['./all-booking-requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllBookingRequestsComponent implements OnInit {

  constructor(public store: BookingRequestsStore) {
  }

  ngOnInit(): void {
    this.store.load({});
  }

  paramsChanged(params: Partial<BookingRequestsParams>): void {
    this.store.load({...params});
  }
}
