import { Component, OnInit } from '@angular/core';


export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  name = 'Cafe de flore';

  locations: Location[] = [{
    _id: '5f7064b6419ed2739cb738f0',
    name: 'Cafe de flore',
    distance: 510.0,
    address: '경기도 안성시 비룡5길 18',
    rating: 4,
    facilities: ['Hot drinks', 'Premium wifi', 'Food']
  }, {
    _id: '5f7064b6419ed2739cb738f2',
    name: 'Cafe Jinny',
    distance: 4510.0,
    address: '경기도 안성시 고수1로 19',
    rating: 2,
    facilities: ['Hot drinks', 'Premium wifi', 'Food']
  }];
  
  ngOnInit(): void {
  }

}
