import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBookingRequestsComponent } from './containers/all-booking-requests/all-booking-requests.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AllBookingRequestsComponent
  }
]

@NgModule({
  declarations: [
    AllBookingRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingRequestsModule { }
