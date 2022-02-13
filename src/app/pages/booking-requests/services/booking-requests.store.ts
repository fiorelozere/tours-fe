import {Injectable} from '@angular/core';
import {BookingRequest} from "../models/booking-request.model";
import {BookingService} from "./booking.service";
import {catchError, EMPTY, Observable, switchMap, tap} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {Tour} from "../../homepage/models/tour.model";
import {ToursParams} from "../../homepage/services/tours.store";
import {ComponentStore} from "@ngrx/component-store";

export interface BookingRequestsParams {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  pageNumber: number;
  pageSize: number;
}

export interface BookingRequestsState {
  data: BookingRequest[]
  params: BookingRequestsParams
  total: number,
  loading: boolean,
  loaded: boolean,
  error: string | null
}

export const initialState: BookingRequestsState = {
  data: [],
  params: {
    firstName: null,
    lastName: null,
    email: null,
    pageNumber: 1,
    pageSize: 10
  },
  total: 0,
  loading: false,
  loaded: false,
  error: null
}

@Injectable()
export class BookingRequestsStore extends ComponentStore<BookingRequestsState> {

  constructor(private bookingsService: BookingService) {
    super(initialState);
  }

  reset = () => this.setState(initialState);

  load = this.effect((payload$: Observable<Partial<BookingRequestsParams>>) => payload$.pipe(
    tap(() => this.patchState({loading: true, loaded: false, error: null})),
    switchMap(payload => {

      const currentPayload = this.get(s => s.params);
      const newPayload = {...currentPayload, ...payload};

      return this.bookingsService.getBookingRequests(newPayload).pipe(
        tap((response: HttpResponse<BookingRequest[]>) => {
            this.patchState({
              data: response.body ?? [], error: null, loading: false, loaded: true, params: newPayload,
              total: Number(response.headers.get('X-Total-Count'))
            })
          }
        ),
        catchError(error => {
          this.patchState({
            error: error.message, data: [], loading: false, loaded: false, params: initialState.params
          });
          return EMPTY;// we return EMPTY in order to keep the effect observable alive
        })
      );
    })
  ));
}
