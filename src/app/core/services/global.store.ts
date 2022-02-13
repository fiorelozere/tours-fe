import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {LocalstorageService} from "./local-storage.service";

export interface GlobalState {
  user: {email: string, password: string} | null;
}


const patientState: GlobalState = {
  user: null
}


@Injectable({ providedIn: 'root' })
export class GlobalStore {
  state$$ = new BehaviorSubject<GlobalState>(patientState);
  state$ = this.state$$.asObservable();

  constructor(private localStorage: LocalstorageService) {
  }

  setState(value: any): void {
    this.state.next(value);
  }

  get state(): any {
    return this.state$$.getValue();
  }

  get user(): {email: string, password: string} | null {
    return this.state.user;
  }

  setUser(user: {email: string, password: string} | null) {
    if(user) {
      this.localStorage.setItem('user', JSON.stringify(user));
    } else {
      this.localStorage.removeItem('user');
    }
    this.state$$.next({...this.state, user});
  }
}
