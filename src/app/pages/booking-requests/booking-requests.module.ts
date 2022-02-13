import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBookingRequestsComponent } from './containers/all-booking-requests/all-booking-requests.component';
import {RouterModule, Routes} from "@angular/router";
import { BookingRequestTableComponent } from './components/booking-request-table/booking-request-table.component';
import { BookingRequestsFiltersComponent } from './components/booking-requests-filters/booking-requests-filters.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BookingRequestsStore} from "./services/booking-requests.store";

const routes: Routes = [
  {
    path: '',
    component: AllBookingRequestsComponent
  }
]

@NgModule({
  declarations: [
    AllBookingRequestsComponent,
    BookingRequestTableComponent,
    BookingRequestsFiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    BookingRequestsStore
  ]
})
export class BookingRequestsModule { }
