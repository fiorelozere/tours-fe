import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-now-form',
  templateUrl: './book-now-form.component.html',
  styleUrls: ['./book-now-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookNowFormComponent implements OnInit {

  form = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    message: [null, Validators.required],
  })

  @Output() submit = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


}
