import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {BackofficeLayoutComponent} from "./layout/backoffice-layout/backoffice-layout.component";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {OrderCompletedComponent} from "./shared/components/order-completed/order-completed.component";
import {NonAuthGuard} from "./core/guards/non-auth.guard";
import {AuthGuard} from "./core/guards/auth.guard";

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
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: BackofficeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'booking-requests',
        pathMatch: 'full'
      },
      {
        path: 'booking-requests',
        loadChildren: () => import('./pages/booking-requests/booking-requests.module').then(m => m.BookingRequestsModule)
      },
      {
        path: 'tours',
        loadChildren: () => import('./pages/tours/tours.module').then(m => m.ToursModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [NonAuthGuard],
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
export class AppRoutingModule {
}
