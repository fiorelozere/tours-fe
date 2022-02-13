import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllToursComponent} from './containers/all-tours/all-tours.component';
import {RouterModule, Routes} from "@angular/router";
import {CreateTourComponent} from './containers/create-tour/create-tour.component';
import {EditTourComponent} from './containers/edit-tour/edit-tour.component';
import {ToursTableComponent} from './components/tours-table/tours-table.component';
import {TourFormComponent} from './components/tour-form/tour-form.component';
import {ToursStore} from "../homepage/services/tours.store";
import {ToursFilterFormComponent} from './components/tours-filter-form/tours-filter-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: AllToursComponent
  },
  {
    path: 'create',
    component: CreateTourComponent
  },
  {
    path: 'edit/:id',
    component: EditTourComponent
  }
]

@NgModule({
  declarations: [
    AllToursComponent,
    CreateTourComponent,
    EditTourComponent,
    ToursTableComponent,
    TourFormComponent,
    ToursFilterFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [
    ToursStore
  ]
})
export class ToursModule {
}
