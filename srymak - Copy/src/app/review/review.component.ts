import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  readmore: any=false;
  constructor() { }
  @Input() review: any;
  ngOnInit(): void {
  }
  readMore() {
    this.readmore = true;
    var review_body = (document.getElementById('review-card-body') as HTMLDivElement)
    review_body.style.overflow = "auto";
  }

}
