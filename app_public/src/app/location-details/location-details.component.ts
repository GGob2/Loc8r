import { Location } from '../home-list/home-list.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  public newReview = {
    author : '',
    rating: 5,
    reviewText: ''
  };

  public googleAPIKey: string= 'AIzaSyBTBlWYHaxm8k4XGybAnFimKYk-InmVj6o';

  constructor() { }

  public formVisible : boolean = false;
  
  ngOnInit(): void {
  }

}
