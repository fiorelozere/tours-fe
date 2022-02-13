import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ToursStore} from "../../../homepage/services/tours.store";
import {BookingRequestsParams} from "../../../booking-requests/services/booking-requests.store";
import {MatDialog} from "@angular/material/dialog";
import {
  ConfirmationPopupComponent
} from "../../../../shared/components/confirmation-popup/confirmation-popup.component";
import {catchError, filter, switchMap, take, throwError} from "rxjs";
import {ToursService} from "../../services/tours.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-all-tours',
  templateUrl: './all-tours.component.html',
  styleUrls: ['./all-tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllToursComponent implements OnInit {

  constructor(
    @Inject('tours-bo') public store: ToursStore,
    public dialog: MatDialog,
    private toursService: ToursService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.store.load({});
  }

  paramsChanged(params: Partial<BookingRequestsParams>): void {
    this.store.load({...params});
  }

  delete(id: number): void {
    const dialog = this.dialog.open(ConfirmationPopupComponent);

    dialog.afterClosed().pipe(
      take(1),
      filter(value => !!value),
      switchMap(value => this.toursService.deleteTour(id).pipe(
        catchError(err => {
          this.snackBar.open(err.message);
          return throwError(err);
        })
        )
      )).subscribe({
      next: value => {
        this.snackBar.open('Deleted successfully!');
        this.store.load({})
      }
    })
  }

}
