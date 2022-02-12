import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookingPayload} from "../../models/booking-payload.model";
import {catchError, pluck, switchMap, take, throwError} from "rxjs";
import {BookingService} from "../../services/booking.service";
import {ToursService} from "../../services/tours.service";

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDetailsComponent implements OnInit {

  tour$ = this.route.params.pipe(
    pluck('id'),
    switchMap(id => this.toursService.getTourById(id).pipe(
        catchError(err => {
          this.router.navigateByUrl('/tours');
          return throwError(err);
        })
      ),
    ))

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private toursService: ToursService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(payload: BookingPayload, interestedTourId: number): void {
    this.bookingService.createBookingRequest({...payload, interestedTourId}).pipe(take(1)).subscribe({
      next: async value => {
        await this.router.navigateByUrl('/order-completed');
      }
    })
  }
}
