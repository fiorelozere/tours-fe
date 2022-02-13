import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(payload: {email: string, password: string}): Observable<any> {
    const path = `${environment.apiUrl}/users?email=${payload.email}&password=${payload.password}`;
    return this.http.get(path);
  }
}
