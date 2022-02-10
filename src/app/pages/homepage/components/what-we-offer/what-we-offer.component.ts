import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatWeOfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
