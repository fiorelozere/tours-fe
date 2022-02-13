import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ToursParams} from "../../../homepage/services/tours.store";

@Component({
  selector: 'app-tours-filter-form',
  templateUrl: './tours-filter-form.component.html',
  styleUrls: ['./tours-filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursFilterFormComponent implements OnInit {

  @Input() set formValue(formValue: ToursParams) {
    this.form.patchValue({
      title: formValue.title,
      type: formValue.type,
      priceOrder: formValue.priceOrder
    })
  }

  form = this.fb.group({
    title: null,
    type: null,
    priceOrder: 'asc'
  })

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

  @Output() search = new EventEmitter<any>()

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.search.emit({
      ...this.form.value,
      pageNumber: 1
    });
  }

  onReset(): void {
    this.search.emit({
      title: null,
      type: null,
      priceOrder: 'asc',
      pageNumber: 1
    });
  }

}
