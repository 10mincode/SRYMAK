import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-teacher',
  templateUrl: './quiz-teacher.component.html',
  styleUrls: ['./quiz-teacher.component.css']
})
export class QuizTeacherComponent implements OnInit {
  questions: any[] = [];
  quizid: any;
  constructor(private router: Router, private http: HttpClient) {
    this.quizid = localStorage.getItem("quizid");
    console.log(this.quizid);

  }

  ngOnInit(): void {
    this.http.get('https://server.srymak.com/getquesapi_call').subscribe((data: any) => {
      console.log(data);
      data.forEach((question: any) => {
        if (question.quizid==this.quizid){
          this.questions.push(question)
        }
      })
      console.log(JSON.stringify(this.questions))
      console.log(JSON.parse(JSON.stringify(this.questions)))
    })
  }

}
