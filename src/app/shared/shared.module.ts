import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        OrderCompletedComponent,
        PaginationComponent,
        ConfirmationPopupComponent
    ],
    exports: [
        PaginationComponent
    ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SharedModule { }
