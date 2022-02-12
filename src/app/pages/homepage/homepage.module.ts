import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './containers/homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";
import {HeroComponent} from './components/hero/hero.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AboutUsComponent} from './components/about-us/about-us.component';
import {WhatWeOfferComponent} from './components/what-we-offer/what-we-offer.component';
import {TourComponent} from './components/tour/tour.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {BookNowFormComponent} from './components/book-now-form/book-now-form.component';
import {AboutComponent} from './containers/about/about.component';
import { ToursComponent } from './containers/tours/tours.component';
import { TourFiltersComponent } from './components/tour-filters/tour-filters.component';
import { TourDetailsComponent } from './containers/tour-details/tour-details.component';
import {ToursStore} from "./services/tours.store";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'tours',
    component: ToursComponent
  },
  {
    path: 'tours/:id',
    component: TourDetailsComponent
  }
]

@NgModule({
  declarations: [
    HomepageComponent,
    HeroComponent,
    AboutUsComponent,
    WhatWeOfferComponent,
    TourComponent,
    GalleryComponent,
    BookNowFormComponent,
    AboutComponent,
    ToursComponent,
    TourFiltersComponent,
    TourDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ToursStore
  ]
})
export class HomepageModule {
}
