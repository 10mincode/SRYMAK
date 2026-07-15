import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  @Input() question: any;
  @Input() i: any;
  ngOnInit(): void {
  }
  dothis(event: any): void {
    let name = event.target.getAttribute('name')
    console.log(name)
    let allradio = document.getElementsByName(`${name}`);
    allradio.forEach(radio => {
      radio.setAttribute('disabled', 'disabled');
    });
    console.log(event.target.value)
  }


}
