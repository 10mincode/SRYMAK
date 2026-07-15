import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsComponent } from '../reviews/reviews.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})



export class HomePageComponent implements OnInit {
  fragment: any;
  loggedin: boolean = false;
  constructor(private appService: AppserviceService, private http: HttpClient, private router: Router, private route: ActivatedRoute, private cookieService: CookieService) { }
  reviews  =
  [
    { img: "../../assets/Reviews/Aayush.jpeg", name: "Aayush's Parents", text: "I have been associated with Srymak classes since October 2021, my son is in 6 class and he is very happy with the class which conducted by Srymak. This is it's own kind of class approach where teachers and students are completely involved in class. This is first time I have ever seen in online class where teachers are asking doubt from every student and clearing the doubts" },
    { img: "../../assets/Reviews/prisha.jpeg", name: "Prisha's Parents", text: "Everything , the teachers , the class and the teaching techniques all were fabulous. The friendly way in which teachers explained the concepts , children had no hesitation in  asking doubts like they have in schools. It really helped to boost the confidence of the child as everyone gets an equal opportunity to express their thoughts. It didn't only prepared children on school level but also make them ready for  further competitions in life." },
    {
      img: "../../assets/Reviews/Tanish.jpeg", name: "Tanish's Parents", text: `Srymak gives excellent coaching for the students.
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
    { img: "../../assets/Reviews/Mayank.jpeg", name: "Mayank's Parents", text: "We are very happy with your studies.  You made our son worthy of this.  He was unable to study in lock down.  His school classes were not being held.  Still you people taught the usage which was not completed uska syllabus.  That syllabus uska is completed.  There has been a lot of improvement." },
    { img: "../../assets/white.png", name: "Mahi's Parents", text: "It's been more than 1 year my daughter is taking coaching from Srymak for English, maths reasoning and G.K subjects, and we have seen a great  improvement in our daughter. Srymak take all efforts to teach the student in a easy manner so that student could not find it difficult to learn.If there is a star rating system then will give 5 star to this coaching institute. Thank you srymak for great learning skills." },
    {
      img: "../../assets/Reviews/Hirav.jpeg", name: "Hirav's Parents", text: `Dear all SrymakTeachers,

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
    {
      img: "../../assets/Reviews/Vaishnavi.jpeg", name: "Vaishnavi's Parents", text: `Dear Srymak team, your all Srymak team is doing a Great Job. We appreciate its efforts to teach students from home online. My daughter Vaishnavi was studying at Cambridge foundation school, new Delhi. But when the lockdown was imposed due to Covid 19 virus all schools have been shut down. At that time your team has started to teach students online from home and without any charges free of cost. Really It's a great effort and we are so grateful and thanks to you and your team. The way of teaching, tuning with, and understanding child psychology is appreciable. Thanks to you. 🙏🏻🌹
Regards,
      Siddhi Singh(parent of Vaishnavi)` },
    {
      img: "../../assets/Reviews/Anurag.jpeg", name: "Anurag", text: `I am studying for RMS paper
And I am studing in batch of Srymak
Teachers of Srymak are very polite
And the way of teaching is excellent
The teachers are very punctual
And also teachers of Srymak take weakly test
Srymak is the best🙂😃` },
    {
      img: "../../assets/Reviews/Madhav.jpeg", name: "Madhav's Parents", text: `I would like to thank you for the helpful guidance provided by the Srymak for my son Madhav. My son is  happy with tutor who is very efficient and shared his knowledge and experience with my son.

No difficulties for me, my son found everything was just right. Always had good feedback after handing in assessments with some good advice attached. I personally think it's good the way it is. I really enjoyed doing classes with Srymak, it gave me a world of knowledge and it was a fun learning experience!` },
    { img: "../../assets/Reviews/Mysha.jpeg", name: "Mysha", text: `Thank you being best support for inspiring in love for learning and gave confidence to learn new things. Teachers had always shows patience for questions and knew just how to explain the answers. Priceless impact you made in my life.Thank you for everything.` },
    {
      img: "../../assets/Reviews/Muskan.jpeg", name: "Muskan's Parents", text: `My daughter is an seventh grader who loves to have fun with learning and Srymak has helped her achive just that. The app has helped transform the way she learns.
Lots of thanks to Srymak team` },
    { img: "../../assets/Reviews/MayankGiri.jpeg", name: "Mayank Giri", text: `It is so so good teaching team in which I enjoyed so much` },
    { img: "../../assets/Reviews/Meghraj.jpeg", name: "Meghraj", text: `Thanks for the efforts and looking forward to keep going for the preparation of sainik school entrance exammam. Thank you  very much for such an interactive session` },
    {
      img: "../../assets/Reviews/Devansh.jpeg", name: "Kavya's Parents", text: `We are new to Srymak and so far we appreciate the great patience shown by the teachers when dealing with the children at this time. We know that this transition to online classes has been a challenge for all the teachers but they have exceeded all expectations. Whether it is ensuring that no child is left unattended to sending reminders to the parents, they have been completely hands-on in the virtual sense. Our special thanks to Yashi Ma'am, Mili ma’am, Atul sir . ` },
    { img: "../../assets/Reviews/Nikil.jpeg", name: "Nikil", text: `Srymak is really very good platform for learning while taking classes, I enjoy them too much as teachers are very mucj friendly. They help us at each and every point. In these classes i can speak without hesitation. There is very much fun to take classes here. I personally feel this is the best platform for study as well as enjoyment. Thank you srymak for all those knowlege and fun..` },
    {
      img: "../../assets/Reviews/NamanP.jpeg", name: "Naman's Parents", text: `As a parent i was very much worried, Naman was too much interested in games but when i associated with srymak..
That was a magic! Naman just forget the games and always excited to join the classes because much more fun is there..  The most important thing which i like here is you ensure participation of all the students in the classes. Each and every student gets a perfect attention. Naman joins the classes before 10 -15 minutes because of excitement

Thanks a lot srymak team` },
    {
      img: "../../assets/Reviews/Garv.jpeg", name: "Garv", text: `Mam I think that Srymak is the best Coaching classes for sainik school and RMS both it helped me a lot in improving my concepts. My all the Doubts are cleared .
THANKS FOR YOUR GUIDANCE MAM`}
  ]
  ngOnInit(): void {
    // this.http.post<any>('http://server.srymak.com/get_stu_d', {
    //   email: `${prompt("Enter Email")}`, passw: `${prompt("Enter Password here")}` }).subscribe((data) => {
    //   alert(data.details);
    //   console.log(data.details)
    // })
    this.route.fragment.subscribe(fragment => {
      setTimeout(() => {
        this.scrollTo(fragment);
      }, 300);
    });
    if (this.cookieService.get('user') != "") {
      this.loggedin = true;
    } else {
      this.openOrCloseModal('hurryup');

    }
  }
  scrollTo(fragment: any) {
    try {
      var elemnt = document.getElementById(fragment) as HTMLElement;
      var headerOffset = 60;
      var elementPosition = elemnt.offsetTop;
      var offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // elemnt.scrollIntoView({ top: offsetPosition, behavior: "smooth", block: "start", inline: "nearest" });
    } catch (e) {
      console.log(e);
    }

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 500,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    autoplaySpeed: 1000,
    autoplayTimeout:8000,
    autoplay: false,
    autoplayHoverPause: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  isOtpSend: boolean = false;
  otp = 1;
  cities: any;
  Check_OTP() {
    var otp = (document.getElementById("myotpemail") as HTMLInputElement).value
    if (Number(otp) == this.otp && this.otp > 9999) {
      alert("SAVED SUCCESSFULLY")
    } else {
      alert("INCORRECT OTP TRY AGAIN")
    }
  }
  openOrCloseModal(id: string) {
    this.isOtpSend = false;
    var modal = (document.getElementById(id) as HTMLDivElement);
    var modal_form = (modal.getElementsByTagName("form")[0] as HTMLFormElement);
    if (modal_form) { modal_form.reset();}
    var bodyelement = (document.getElementById("mainbody") as HTMLBodyElement)
    if (modal.style.display == 'flex') {
      modal.style.display = 'none';
      bodyelement.style.overflow = 'auto';
    } else {
      if (id == "registermodal" && this.loggedin) {
        this.router.navigate(['dashboard']);
      }
      modal.style.display = 'flex';
      bodyelement.style.overflow = 'hidden';
    }
  }
  Send_OTP() {
    var otp = Math.floor(Math.random() * 99999) + 10000;
    var mobilenumber = (document.getElementById("myemail") as HTMLInputElement).value;
    var url = `https://srymak.com/send_otp/${mobilenumber}`;
    console.log(url);
    this.appService.getOTP(url).subscribe(response => {
      console.log(response);
      this.isOtpSend = true;
      this.otp = response.otp;
      this.expireotp();
    },
      error => {
        console.log(error);
      });
  }

  onlyNumberKey(evt: any) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
    return true;
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private async expireotp() {
    // Sleep thread for 3 seconds
    await this.delay(10 * 1000 *60);
    this.otp = 2;
    window.alert("YOUR OTP HAS BEEN EXPIRED")
  }
  // }
  // Call_OTP(){
  //   var otp = Math.floor(Math.random() * 99999) + 10000;
  //   var mobilenumber = (document.getElementById("myphone") as HTMLInputElement).value;
  //   var url = `https://vsms.minavo.in/api/singlesms.php?auth_key=f6c7973d-5d95-11ec-b4b8-000d3af27b49&mobilenumber=${mobilenumber}&message=Your%20OTP%20IS%20${otp}&sid=VAGENT&mtype=N&template_id=1207160749753068052"`;
  //   console.log(url);
  //   debugger;

  // }
  // Send_OTP() {
  //   this.client.send(
  //     {
  //       text: 'i hope this works',
  //       from: 'you <username@your-email.com>',
  //       to: 'someone <someone@your-email.com>, another <another@your-email.com>',
  //       cc: 'else <else@your-email.com>',
  //       subject: 'testing emailjs',
  //     },
  //     (err: any, message: any) => {
  //       console.log(err || message);
  //     }
  //   );
  // }


}
