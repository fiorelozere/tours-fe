import {Injectable} from '@angular/core';
import {ComponentStore} from "@ngrx/component-store";
import {Tour} from "../models/tour.model";
import {ToursService} from "./tours.service";
import {catchError, EMPTY, Observable, switchMap, tap} from "rxjs";
import {HttpResponse} from "@angular/common/http";

export interface ToursParams {
  title: string | null;
  type: string | null;
  priceOrder: 'asc' | 'desc',
  pageNumber: number,
  pageSize: number
}

export interface ToursState {
  data: Tour[]
  params: ToursParams
  total: number,
  loading: boolean,
  loaded: boolean,
  error: string | null
}

export const initialState: ToursState = {
  data: [],
  params: {
    title: null,
    type: null,
    priceOrder: 'asc',
    pageNumber: 1,
    pageSize: 10
  },
  total: 0,
  loading: false,
  loaded: false,
  error: null
}

@Injectable()
export class ToursStore extends ComponentStore<ToursState> {

  constructor(private toursService: ToursService) {
    super(initialState)
    this.state$.subscribe(console.log)
  }

  reset = () => this.setState(initialState);

  load = this.effect((payload$: Observable<Partial<ToursParams>>) => payload$.pipe(
    tap(() => this.patchState({ loading: true, loaded: false, error: null })),
    switchMap(payload => {

      const currentPayload = this.get(s => s.params);
      const newPayload = { ...currentPayload, ...payload };

      return this.toursService.getTours(newPayload).pipe(
        tap((response: HttpResponse<Tour[]>) => {
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
