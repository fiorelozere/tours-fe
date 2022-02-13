import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {take} from "rxjs";
import {UserFormComponent} from "../../components/user-form/user-form.component";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @ViewChild(UserFormComponent) form!: UserFormComponent;

  constructor(
    private usersService: UsersService,
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

    this.usersService.createUser(this.form.form.value).pipe(take(1)).subscribe({
      next: value => {
        this.snackBar.open('Created successfully!', 'Close');
        this.router.navigateByUrl('/dashboard/users');
      },
      error: err => {
        this.snackBar.open(err.message);
      }
    })
  }

}
