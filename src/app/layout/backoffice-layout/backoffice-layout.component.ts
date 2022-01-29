import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './backoffice-layout.component.html',
  styleUrls: ['./backoffice-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackofficeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
