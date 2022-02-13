import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tour} from "../../../homepage/models/tour.model";

@Component({
  selector: 'app-tours-table',
  templateUrl: './tours-table.component.html',
  styleUrls: ['./tours-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursTableComponent implements OnInit {

  @Input() tours: Tour[] = [];
  @Input() pageNumber = 1;
  @Input() pageSize = 10;
  @Input() total = 0;
  @Output() pageChanged = new EventEmitter<any>();

  @Output() onDelete = new EventEmitter<any>();

  columns = ['title', 'type', 'description', 'price', 'actions'];

  constructor() {
  }

  ngOnInit(): void {
  }

  paginate(event: any): void {
    this.pageChanged.emit(
      {
        pageNumber: event.pageIndex,
        pageSize: event.pageSize
      }
    )
  }

}
