import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursComponent implements OnInit {

  tours = [
    {
      id: '1',
      title: 'Mountain',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et
       perferendis  eaque, exercitationem praesentium nihil.`,
      price: 23,
      image: 'assets/img/orange.png'
    },
    {
      id: '2',
      title: 'Mountain',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et
       perferendis  eaque, exercitationem praesentium nihil.`,
      price: 23,
      image: 'assets/img/city.png'
    },
    {
      id: '3',
      title: 'Mountain',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et
       perferendis  eaque, exercitationem praesentium nihil.`,
      price: 23,
      image: 'assets/img/turkey.png'
    }
  ];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
