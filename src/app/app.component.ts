import {Component, OnInit} from '@angular/core';
import {GlobalStore} from "./core/services/global.store";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{

  constructor(private globalStore: GlobalStore) {
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') ?? 'null');
    console.log(user)
    if(user) {
      this.globalStore.setUser(user)
    }
  }
}
