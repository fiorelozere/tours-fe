import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BackofficeLayoutComponent } from './backoffice-layout/backoffice-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NavbarComponent } from './main-layout/components/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './main-layout/components/footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    MainLayoutComponent,
    BackofficeLayoutComponent,
    AuthLayoutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class LayoutModule { }
