import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ToursParams} from "../../services/tours.store";

@Component({
  selector: 'app-tour-filters',
  templateUrl: './tour-filters.component.html',
  styleUrls: ['./tour-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourFiltersComponent implements OnInit {

  @Output() search = new EventEmitter<any>();

  form = this.fb.group({
    title: null,
    type: null,
    priceOrder: 'asc',
  });

  orders = [
    {
      label: 'Lower First',
      value: 'asc'
    },
    {
      label: 'Higher First',
      value: 'desc'
    }
  ]

  @Input() set formValue(params: ToursParams) {
    this.form.patchValue({
      title: params.title,
      type: params.type,
      priceOrder: params.priceOrder
    })
  }

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
  }

  onSearch(): void {
    this.search.emit({
      ...this.form.value,
      pageNumber: 1
    })
  }

  onReset(): void {
    this.search.emit({
      title: null,
      type: null,
      priceOrder: 'asc',
      pageNumber: 1
    })
  }

}
