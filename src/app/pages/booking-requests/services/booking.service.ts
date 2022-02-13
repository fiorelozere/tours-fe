import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {BookingPayload} from "../../homepage/models/booking-payload.model";
import {BookingRequestsParams} from "./booking-requests.store";
import {BookingRequest} from "../models/booking-request.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getBookingRequests(params: BookingRequestsParams): Observable<HttpResponse<BookingRequest[]>> {
    const path = `${environment.apiUrl}/bookings`;
    return this.http.get<BookingRequest[]>(path,
      {observe: 'response', params: this.getBookingRequestsParams(params)});
  }

  createBookingRequest(payload: BookingPayload): Observable<any> {
    const path = `${environment.apiUrl}/bookings`;
    return this.http.post(path, payload);
  }

  getBookingRequestsParams(params: BookingRequestsParams): HttpParams {
    let httpParams = new HttpParams();

    httpParams = httpParams.set('_page', params.pageNumber);
    httpParams = httpParams.set('_limit', params.pageSize);

    if (params.firstName) {
      httpParams = httpParams.set('firstName_like', params.firstName);
    }

    if (params.lastName) {
      httpParams = httpParams.set('lastName_like', params.lastName);
    }

    if (params.email) {
      httpParams = httpParams.set('email_like', params.email);
    }

    httpParams = httpParams.set('_expand', 'tour');

    return httpParams;
  }
}
