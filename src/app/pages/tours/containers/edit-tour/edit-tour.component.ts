import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {TourFormComponent} from "../../components/tour-form/tour-form.component";
import {ToursService} from "../../services/tours.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, pluck, switchMap, take, throwError} from "rxjs";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTourComponent implements OnInit {

  @ViewChild(TourFormComponent) form!: TourFormComponent;

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
    private toursService: ToursService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(id: number): void {
    if (this.form.form.invalid) {
      this.snackBar.open('Complete all fields!', 'Close');
      return;
    }

    this.toursService.editTour(this.form.form.value, id).pipe(take(1)).subscribe({
      next: value => {
        this.snackBar.open('Edited successfully!', 'Close');
        this.router.navigateByUrl('/dashboard/tours');
      },
      error: err => {
        this.snackBar.open(err.message);
      }
    })
  }


}
