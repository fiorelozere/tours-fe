import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
    declarations: [
        OrderCompletedComponent,
        PaginationComponent
    ],
    exports: [
        PaginationComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
