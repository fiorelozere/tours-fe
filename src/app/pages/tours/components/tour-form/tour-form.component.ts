import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourFormComponent implements OnInit {

  @Input() set formValue(formValue: any) {
    if(formValue) {
      this.form.patchValue(formValue);
    }
  }

  form = this.fb.group({
    title: [null, Validators.required],
    type: [null, Validators.required],
    description: [null, Validators.required],
    price: [null, Validators.required],
    image: [null, Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  get image(): string {
    return this.form.value.image
  }

  ngOnInit(): void {
  }


}
