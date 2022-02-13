import {Component, OnInit, ViewChild} from '@angular/core';
import {catchError, pluck, switchMap, take, throwError} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsersService} from "../../services/users.service";
import {UserFormComponent} from "../../components/user-form/user-form.component";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @ViewChild(UserFormComponent) form!: UserFormComponent;

  user$ = this.route.params.pipe(
    pluck('id'),
    switchMap(id => this.usersService.getUserById(id).pipe(
        catchError(err => {
          this.router.navigateByUrl('/dashboard/users');
          return throwError(err);
        })
      ),
    ))

  constructor(
    private usersService: UsersService,
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

    this.usersService.editUser(this.form.form.value, id).pipe(take(1)).subscribe({
      next: value => {
        this.snackBar.open('Edited successfully!', 'Close');
        this.router.navigateByUrl('/dashboard/users');
      },
      error: err => {
        this.snackBar.open(err.message);
      }
    })
  }

}
