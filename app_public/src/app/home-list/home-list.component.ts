import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { GeolocationService } from '../geolocation.service';
import { Location } from '../location';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
})
export class HomeListComponent implements OnInit {
  constructor(
    private loc8rDataService: Loc8rDataService,
    private geolocationService: GeolocationService
  ) {}

  public locations: Location[];

  public message: string;

  private getLocations(position: any): void {
    this.message = 'Searching for nearby plcaes';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;

    this.loc8rDataService.getLocations(lat, lng).then((foundLocations) => {
      this.message = foundLocations.length > 0 ? '' : 'No locations found';
      this.locations = foundLocations;
    });
  }

  private showError(error: any): void {
    this.message = error.message;
  }

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser.';
  }

  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geolocationService.getPostion(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this)
    );
  }
  // name = 'Cafe de flore';

  /* locations: Location[] = [{
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
  }]; */

  ngOnInit() {
    this.getPosition();
  }
}
