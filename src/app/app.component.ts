import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {GlobalStore} from "./core/services/global.store";
import {BehaviorSubject} from "rxjs";
import {isPlatformBrowser} from "@angular/common";
import {LocalstorageService} from "./core/services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{

  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private globalStore: GlobalStore,
    private localStorage: LocalstorageService,
    private router: Router
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));

  }

  ngOnInit(): void {
    const user = JSON.parse(this.localStorage.getItem('user') ?? 'null');
    console.log(user)
    if(user) {
      this.globalStore.setUser(user);
      this.router.navigateByUrl('/dashboard')
    }
  }
}
