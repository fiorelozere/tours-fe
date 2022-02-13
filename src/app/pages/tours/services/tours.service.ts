import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ToursParams} from "../../homepage/services/tours.store";
import {Tour} from "../../homepage/models/tour.model";

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private http: HttpClient) {
  }

  getTourById(id: number): Observable<any> {
    const path = `${environment.apiUrl}/tours/${id}`;
    return this.http.get(path);
  }

  getPopularTours(): Observable<any> {
    const path = `${environment.apiUrl}/tours?_page=1&_limit=3`;
    return this.http.get(path);
  }

  getTours(params: ToursParams): Observable<HttpResponse<Tour[]>> {
    const path = `${environment.apiUrl}/tours`;
    return this.http.get<Tour[]>(path, {observe: 'response', params: this.getTourParams(params)})
  }

  getTourParams(params: ToursParams): HttpParams {
    let httpParams = new HttpParams();

    httpParams = httpParams.set('_page', params.pageNumber);
    httpParams = httpParams.set('_limit', params.pageSize);
    httpParams = httpParams.set('_sort', 'price');

    if (params.title) {
      httpParams = httpParams.set('title_like', params.title);
    }
    if (params.type) {
      httpParams = httpParams.set('type_like', params.type);
    }

    httpParams = httpParams.set('_order', params.priceOrder);

    return httpParams;
  }
}
