import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {

  tours = [
    {
      title: 'Mountain',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et
       perferendis  eaque, exercitationem praesentium nihil.`,
      price: 23,
      image: 'assets/img/orange.png'
    },
    {
      title: 'Mountain',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et
       perferendis  eaque, exercitationem praesentium nihil.`,
      price: 23,
      image: 'assets/img/city.png'
    },
    {
      title: 'Mountain',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et
       perferendis  eaque, exercitationem praesentium nihil.`,
      price: 23,
      image: 'assets/img/turkey.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(searchQuery: string): any {
    console.log(searchQuery);
  }

  onSubmit(payload: any): void {
    console.log(payload)
  }
}