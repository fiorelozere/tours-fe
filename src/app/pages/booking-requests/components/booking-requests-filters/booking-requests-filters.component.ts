import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {BookingRequestsParams} from "../../services/booking-requests.store";

@Component({
  selector: 'app-booking-requests-filters',
  templateUrl: './booking-requests-filters.component.html',
  styleUrls: ['./booking-requests-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingRequestsFiltersComponent implements OnInit {

  @Input() set formValue(formValue: BookingRequestsParams) {
    this.form.patchValue({
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email
    })
  }

  form = this.fb.group({
    firstName: [null],
    lastName: [null],
    email: [null]
  })

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
      firstName: null,
      lastName: null,
      email: null,
      pageNumber: 1
    });
  }
}
