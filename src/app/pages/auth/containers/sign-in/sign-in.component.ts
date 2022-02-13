import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {BehaviorSubject, take} from "rxjs";
import {Router} from "@angular/router";
import {GlobalStore} from "../../../../core/services/global.store";

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  form = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  })

  alert = new BehaviorSubject<{show: boolean; message: string | null}>({
    show: false,
    message: null
  })

  alert$ = this.alert.asObservable();

  constructor(
    private fb: FormBuilder,
    private usersService: AuthService,
    private router: Router,
    private globalStore: GlobalStore
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if(this.form.invalid) {
      return;
    }
    this.usersService.signIn(this.form.value).pipe(take(1)).subscribe(
      {
        next: res => {
          if (res.length > 0) {
            this.globalStore.setUser(res[0]);
            this.router.navigateByUrl('/dashboard');
          } else {
            this.createAlert('Invalid Credentials')
          }
        },
        error: err => {
          this.createAlert(err.message)
        }
      })
  }

  createAlert(message: string) {
    this.alert.next({message, show: true});
    setTimeout(() => {
      this.alert.next({message: null, show: false});
    }, 3000)
  }
}
