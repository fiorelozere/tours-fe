import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() users: Array<{ email: string; password: string; id: number }> = [];

  @Output() onDelete = new EventEmitter<number>();

  columns = ['email', 'actions'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
