import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {

  @Input() pageNumber = 1;
  @Input() total = 0;
  @Input() pageSize = 10;
  @Output() pageChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  previous(): void {
    if(this.pageNumber - 1 >= 1) {
      this.pageChanged.emit(this.pageNumber - 1);
    }
  }

  next(): void {
    const totalPages = Math.ceil(this.total / this.pageSize);
    if(this.pageNumber + 1 <= totalPages) {
      this.pageChanged.emit(this.pageNumber + 1);
    }
  }
}
