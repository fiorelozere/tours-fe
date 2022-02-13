import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllToursComponent } from './containers/all-tours/all-tours.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AllToursComponent
  }
]

@NgModule({
  declarations: [
    AllToursComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ToursModule { }
