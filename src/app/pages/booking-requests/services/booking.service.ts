import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {BookingPayload} from "../../homepage/models/booking-payload.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  createBookingRequest(payload: BookingPayload): Observable<any> {
    const path = `${environment.apiUrl}/bookings`;
    return this.http.post(path, payload);
  }
}
