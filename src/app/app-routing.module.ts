import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {BackofficeLayoutComponent} from "./layout/backoffice-layout/backoffice-layout.component";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {OrderCompletedComponent} from "./shared/components/order-completed/order-completed.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
      },
      {
        path: 'order-completed',
        component: OrderCompletedComponent
      }
    ]
  },
  {
    path: 'backoffice',
    component: BackofficeLayoutComponent
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
