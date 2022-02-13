import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GlobalStore} from "../../core/services/global.store";
import {Router} from "@angular/router";

@Component({
  templateUrl: './backoffice-layout.component.html',
  styleUrls: ['./backoffice-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackofficeLayoutComponent implements OnInit {

  constructor(
    public store: GlobalStore,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.store.setUser(null);
    this.router.navigateByUrl('/auth/sign-in');
  }
}
