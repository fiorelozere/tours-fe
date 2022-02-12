import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BookingService} from "../../services/booking.service";
import {BookingPayload} from "../../models/booking-payload.model";
import {take} from "rxjs";
import {Router} from "@angular/router";
import {ToursService} from "../../services/tours.service";

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {

  tours$ = this.toursService.getPopularTours();

  constructor(
    private toursService: ToursService,
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearch(searchQuery: string): any {
    console.log(searchQuery);
  }

  onSubmit(payload: BookingPayload): void {
    this.bookingService.createBookingRequest({...payload, interestedTourId: null}).pipe(take(1)).subscribe({
      next: async value => {
        await this.router.navigateByUrl('/order-completed');
      }
    })
  }
}
