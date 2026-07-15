import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  reviews = [
    { img: "../../assets/white.png", name: "Aayush's Parents", text:"I have been associated with Srymak classes since October 2021, my son is in 6 class and he is very happy with the class which conducted by Srymak. This is it's own kind of class approach where teachers and students are completely involved in class. This is first time I have ever seen in online class where teachers are asking doubt from every student and clearing the doubts"},
    { img: "../../assets/white.png", name: "Prisha's Parents", text:"Everything , the teachers , the class and the teaching techniques all were fabulous. The friendly way in which teachers explained the concepts , children had no hesitation in  asking doubts like they have in schools. It really helped to boost the confidence of the child as everyone gets an equal opportunity to express their thoughts. It didn't only prepared children on school level but also make them ready for  further competitions in life."},
    {
      img: "../../assets/white.png", name: "Tanish's Parents", text: `Srymak gives excellent coaching for the students.
Really you people giving flexible timing for the students.
You are taking class even at 9.00 PM
Really I like your dedication towards your work.
Giving individual attention to the students.
My son enjoys the class too.
All the teachers are good educated and clearing all doubts.
I like srymak very much. `},
    {
      img: "../../assets/white.png", name: "Garv Gupta", text: `My experience in srymark was very good,every teacher coordinated with us and made sure each topic was clear and have no doubts it helped me in studies a lot and made me confident
Thank you for everything`},
    { img: "../../assets/white.png", name: "Mayank's Parents", text:"We are very happy with your studies.  You made our son worthy of this.  He was unable to study in lock down.  His school classes were not being held.  Still you people taught the usage which was not completed uska syllabus.  That syllabus uska is completed.  There has been a lot of improvement."},
    { img: "../../assets/white.png", name: "Mahi's Parents", text:"It's been more than 1 year my daughter is taking coaching from Srymak for English, maths reasoning and G.K subjects, and we have seen a great  improvement in our daughter. Srymak take all efforts to teach the student in a easy manner so that student could not find it difficult to learn.If there is a star rating system then will give 5 star to this coaching institute. Thank you srymak for great learning skills."},
    {
      img: "../../assets/white.png", name: "Hirav's Parents", text: `Dear all SrymakTeachers,

It's  a boon for us to have your team. We are so happy tobe associate with Srymak Team.

The way you all focus & approach to students is outstanding & appreciatable.

      Kutoos!!! to all members of Srymak.You all doing Good Job with 100 % Dedication.

As a parents view, your team keeps on ticking round the clock.Making Studying with students, Revision and then Exam preparation.After that, Review discussion on the exam.From top to bottom your all presence is commandable.

Not only Exam point of view, but also explaining latest happenings & General Knowledge awareness.It makes students Persanality improvement.

Without any Expectations from others you all delivering Good Quality of Education.

Personally I feel, associating with Srymak Family is like God's blessings.

Overall, in all sectors you people outstanding.

Thanks to be associated.

  Regards,
  Pratheesh S Pokkali(Parent of Hirav P Pokkali).`},
    {img:"../../assets/white.png",name:"",text:""},
    {img:"../../assets/white.png",name:"",text:""},
  ]

  ngOnInit(): void {
  }

}
