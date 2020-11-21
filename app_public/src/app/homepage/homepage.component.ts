import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageContent = {
    header: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: 'is on Loc8r because it has accessible wifi and space \
    to sit down with your laptop and get some work done. \n\n If \
    you\'ve been and you like it - or if you don\'t - please \
    leave a review to help other people just like you.'
  };

}
