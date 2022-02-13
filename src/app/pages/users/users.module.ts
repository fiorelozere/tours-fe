import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './containers/all-users/all-users.component';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { EditUserComponent } from './containers/edit-user/edit-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  },
  {
    path: 'edit/:id',
    component: EditUserComponent
  }
]

@NgModule({
  declarations: [
    AllUsersComponent,
    CreateUserComponent,
    EditUserComponent,
    UserFormComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class UsersModule { }
