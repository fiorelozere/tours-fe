import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDetailsComponent implements OnInit {

  tour = {
    id: '1',
    title: 'Mountain',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et
       perferendis  eaque, exercitationem praesentium nihil.`,
    price: 23,
    image: 'assets/img/orange.png'
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(payload: any) {
    console.log(payload);
    this.router.navigateByUrl('/order-completed');
  }
}
