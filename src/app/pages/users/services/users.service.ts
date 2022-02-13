import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Tour} from "../../homepage/models/tour.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ToursParams} from "../../homepage/services/tours.store";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<any> {
    const path = `${environment.apiUrl}/users/${id}`;
    return this.http.get(path);
  }

  getUsers(): Observable<{id: number; email: string; password: string}[]> {
    const path = `${environment.apiUrl}/users`;
    return this.http.get<{id: number; email: string; password: string}[]>(path);
  }

  deleteUser(id: number): Observable<any> {
    const path = `${environment.apiUrl}/users/${id}`;
    return this.http.delete(path);
  }

  createUser(payload: Partial<{email: string; password: string}>): Observable<any> {
    const path = `${environment.apiUrl}/users`
    return this.http.post(path, payload);
  }

  editUser(payload: Partial<{email: string; password: string}>, id: number): Observable<any> {
    const path = `${environment.apiUrl}/users/${id}`
    return this.http.patch(path, payload);
  }
}
