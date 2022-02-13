import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {
  ConfirmationPopupComponent
} from "../../../../shared/components/confirmation-popup/confirmation-popup.component";
import {BehaviorSubject, catchError, filter, switchMap, take, throwError} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent implements OnInit {

  users$$ = new BehaviorSubject<Array<{ id: number; email: string; password: string }>>([]);
  users$ = this.users$$.asObservable();

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().pipe(take(1)).subscribe(users => this.users$$.next(users));
  }

  delete(id: number): void {
    const dialog = this.dialog.open(ConfirmationPopupComponent);

    dialog.afterClosed().pipe(
      take(1),
      filter(value => !!value),
      switchMap(value => this.usersService.deleteUser(id).pipe(
          catchError(err => {
            this.snackBar.open(err.message);
            return throwError(err);
          })
        )
      )).subscribe({
      next: value => {
        this.snackBar.open('Deleted successfully!');
        this.getUsers();
      }
    })
  }
}

