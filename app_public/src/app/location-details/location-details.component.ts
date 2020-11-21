import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;
  public googleAPIKey: string= 'AIzaSyBTBlWYHaxm8k4XGybAnFimKYk-InmVj6o';
  constructor() { }

  ngOnInit(): void {
  }

}