import { Component, OnInit, Input } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location } from '../home-list/home-list.component';
@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: any;

  public newReview = {
    author : '',
    rating: 5,
    reviewText: ''
  };

  public googleAPIKey: string= 'AIzaSyBTBlWYHaxm8k4XGybAnFimKYk-InmVj6o';

  constructor(private loc8rDataService : Loc8rDataService) { }

  public formVisible : boolean = false;

  ngOnInit(): void {
  }

  public formError: string;

  private formIsValid(): boolean {
    if(this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else{
      return false;
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5 ;
    this.newReview.reviewText = '';
    }

  public onReviewSubmit(): void {
    this.formError='';
      if(this.formIsValid()) {
        console.log(this.newReview);
        this.loc8rDataService.addReviewByLocationId(this.location._id,
          this.newReview)
          .then(review => {
            console.log('Review Saved', review);
            let reviews = this.location.reviews.slice(0);
            reviews.unshift(review);
            this.location.reviews = reviews;
            this.resetAndHideReviewForm();
          })
            
      } else {
        
        this.formError = "All fileds required, please try again";
        
      }
    
  }
}
