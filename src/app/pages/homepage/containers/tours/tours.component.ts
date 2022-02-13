import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToursParams, ToursStore} from "../../services/tours.store";
import {Tour} from "../../models/tour.model";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursComponent implements OnInit {

  constructor(
    public router: Router,
    @Inject('tours-fe') public store: ToursStore
  ) { }

  ngOnInit(): void {
    this.store.load({})
  }

  paginate(pageNumber: number): void {
    this.store.load({pageNumber});
  }

  search(params: Partial<ToursParams>): void {
    this.store.load({...params});
  }

}
