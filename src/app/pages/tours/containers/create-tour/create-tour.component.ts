import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {TourFormComponent} from "../../components/tour-form/tour-form.component";
import {ToursService} from "../../services/tours.service";
import {take} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTourComponent implements OnInit {

  @ViewChild(TourFormComponent) form!: TourFormComponent;

  constructor(
    private toursService: ToursService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.form.invalid) {
      this.snackBar.open('Complete all fields!', 'Close');
      return;
    }

    this.toursService.createTour(this.form.form.value).pipe(take(1)).subscribe({
      next: value => {
        this.snackBar.open('Created successfully!', 'Close');
        this.router.navigateByUrl('/dashboard/tours');
      },
      error: err => {
        this.snackBar.open(err.message);
      }
    })
  }

}
