import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  constructor(private http: HttpClient,private router:Router) { }
  questions: any[] = [];


  ngOnInit(): void {
    this.http.get('https://server.srymak.com/getquesapi_call').subscribe((data:any) => {
      console.log(data);
      let ids: string[] = []
      data.forEach((question: any) => {
          if (ids.indexOf(question.quizid) == -1) {
            this.questions.push(question)
            ids.push(question.quizid)
            console.log(ids, " HELLO")
          }
      })
    })
  }
  go_to_teachers_section(quizid: any) {
    localStorage.setItem("quizid", quizid);
    console.log(quizid)
    this.router.navigate(['quiz/teacher/', { state: { example: quizid } }])
  }

}



