import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { io } from 'socket.io-client';
import * as uuid from 'uuid';

@Component({
  selector: 'app-quiz-multiplayer',
  templateUrl: './quiz-multiplayer.component.html',
  styleUrls: ['./quiz-multiplayer.component.css']
})
export class QuizMultiplayerComponent implements OnInit {
  socket: any
  show_leaderboard: boolean = true;
  constructor(private activatedRoute: ActivatedRoute) {
    this.socket = io("ws://192.168.29.211:3030");

  }
  student_details: any[] = [];
  index = 0;
  themes = [{ "image": "../../assets/bg1.jpg" }, { "image": "../../assets/bg2.jpg" },
    { "image": "../../assets/bg3.jpg" }, { "image": "../../assets/bg4.jpg" },
    { "image": "../../assets/bg5.jpg" }, { "image": "../../assets/bg6.jpg" }, { "image": "../../assets/bg7.jpg" }
  ]
  questions = [{
    "id": 1,
    "question": "What is my name",
    "answers": ["16", "28", "32665547565", "44"],
    "correct": "2"
  },{
    "id": 2,
    "question": "What is YOUR name",
    "answers": ["16", "28", "32", "44"],
    "correct": "3"
    }]
  score: number = 0;
  right: number = 0;
  wrong: number = 0;
  skipped: number = 0;
  time: number = 0;
  question: any;
  roomId: string = "";
  userId: string = uuid.v4();
  quesbox:any;
  resultbox: any;
  setTheme(theme: any) {
    console.log(theme.image)
    const mainelement = document.getElementsByClassName('mainbox')[0] as HTMLDivElement;
    mainelement.style.background = `url(${theme.image})`;
    mainelement.style.backgroundSize = "cover";
    mainelement.style.backgroundPosition="center"
  }
  fullScreen() {
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen
      ||
      elem['requestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }
  ngOnInit(): void {

    this.question = this.questions[this.index];
    this.quesbox=document.getElementById("question-box") as HTMLElement
    this.resultbox=document.getElementById("result-box") as HTMLElement
    this.activatedRoute.paramMap.subscribe(x => {
      let id = x.get('roomId');
      console.log(id);
      if (id) this.roomId = id
    });
    alert(this.roomId)
    this.socket.emit('join-room', this.roomId, this.userId, prompt("Enter Your Name"))
    this.socket.on('stu-details', (stu_details: any) => {
      this.student_details = []

      for (const [key, value] of Object.entries(stu_details)) {
        var temp={"id":key,"name":stu_details[key].name,"points":stu_details[key].points}
        this.student_details.push(temp);
        this.student_details.sort((a, b) => {
          return b.points- a.points;
        });
        this.student_details.forEach((student, i) => {
          this.student_details[i].rank = i + 1;
          if (this.student_details[i - 1] && student.points == this.student_details[i - 1].points) {
            this.student_details[i].rank = this.student_details[i - 1].rank;
          }
        })
        console.log(stu_details)
        console.log(this.student_details)
      }
    });
  }
  async dothis(event: any) {
    console.log("Answer Saved")
    var name = event.target.name;
    var value = event.target.getAttribute("data-answer");
    console.log(this.question.answers[Number(this.question.correct) - 1])
    console.log(value)
    if (value == this.question.answers[Number(this.question.correct)-1]) {
      console.log("Correct");
      this.score += 1000;
      this.socket.emit('question_done', this.userId, 1000)
      this.right++;
    } else {
      console.log("INCORRECT")
      event.target.nextElementSibling.style.backgroundColor = 'red';
      this.score -= 500;
      this.socket.emit('question_done', this.userId, -500)

      this.wrong++;
    }
    console.log(this.score)
    const allradio = (document.getElementsByName(`${name}`) as unknown as HTMLInputElement[]);
    for (var i = 0; i < allradio.length; i++) {
      allradio[i].disabled = true;
      if (i == this.question.correct - 1) {
              // @ts-ignore: Object is possibly 'null'.

        allradio[i].nextElementSibling.style.backgroundColor = 'darkgreen';
      }
    }
    await this.delay(1000)
    this.quesbox.classList.toggle('d-none');
    this.resultbox.classList.toggle('d-none');
    if (this.show_leaderboard) {
      await this.delay(2000)
      this.quesbox.classList.toggle('d-none');
      this.resultbox.classList.toggle('d-none');
    }
    if (this.questions.length - 1 != this.index) {

      this.index += 1;
      this.question = this.questions[this.index]
    } else {
      alert(this.score + "\n" + this.wrong + "\n" +this.right)
    }
    for (var i = 0; i < allradio.length; i++) {
      allradio[i].disabled = false;
      (allradio[i].nextElementSibling as HTMLElement).style.backgroundColor="#00000080"
      if (i == this.question.correct - 1) {
        // @ts-ignore: Object is possibly 'null'.

        // allradio[i].nextElementSibling.style.backgroundColor = 'darkgreen';
      }
    }
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));

  }
}
