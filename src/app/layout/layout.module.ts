import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BackofficeLayoutComponent } from './backoffice-layout/backoffice-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    BackofficeLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
