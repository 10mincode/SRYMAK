import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[]=[];
  questions_tmp: any;
  questions_list: any = {};
  subjects_list: any[] = [];
  class_list: any = {};
  constructor(private quesSer: QuestionsService) { }

  ngOnInit(): void {
    this.quesSer.getQuestions().subscribe(response => {
      // console.log(response);
      this.questions_tmp = response;
       this.questions_tmp.forEach((question: { class: any; subject: any; topic: any; }) => {
        //  console.log(question.class, question.subject, question.topic);
         this.questions.push({ [question.class]: { [question.subject]: { [question.topic]: question } } })
       });
      this.questions.forEach((question: any) => {
        for (let [key, value] of Object.entries(question)) {
          if (this.questions_list[key]!=undefined) {
            this.questions_list[key].push(value);

          } else {
            this.questions_list[key] = []
            this.questions_list[key].push(value)
            console.log('1')
          }
        }

      })
      console.log(this.questions_list);
      for (let [key1, value] of Object.entries(this.questions_list)) {
        var values: any = value;

        console.log("12")
        values.forEach((_element: any) => {
          console.log("444")
          for (let [key, value] of Object.entries(_element)) {
            console.log("42")
            if (this.class_list[key1] != undefined) {
              this.class_list[key1].add(key);

            } else {
              this.class_list[key1] = new Set()
              this.class_list[key1].add(key)
              console.log('1')
            }
            // this.class_list[key].push(key)
          }
        });


      }
      console.log(this.class_list)
    })


}
}
function question(question: any, any: any) {
  throw new Error('Function not implemented.');
}

