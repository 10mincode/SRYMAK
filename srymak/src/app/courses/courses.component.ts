import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  class_time: any;
  loggedin: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService) { }
  jusssss: string = '<i class="fa-solid fa-language"></i>';
  courses: Array<any> = [];
  course: any;
  selected: string | undefined;
  activecourse: any;
  show_course_mobile: boolean = false;
  course_select: FormGroup = new FormGroup(
    {
      course: new FormControl("", Validators.required),
      subcourse: new FormControl("", Validators.required),
    }
  )
  ClassList: Array<any> = [
    { id: 7, Name: "English Speaking", Subitems: ["Spoken English"] },
    { id: 6, Name: "RMS and Sainik", Subitems: ["Class 6", "Class 9"] },
    { id: 1, Name: "Class 6", Subitems: ["Math, English, Science, SSc", "Math, Science", "Math, Science, English", "Math, Science, SSc"] },
    { id: 2, Name: "Class 7", Subitems: ["Math, English, Science, SSc", "Math, Science", "Math, Science, English", "Math, Science, SSc"] },
    { id: 3, Name: "Class 8", Subitems: ["Math, English, Science, SSc", "Math, Science", "Math, Science, English", "Math, Science, SSc"] },
    { id: 4, Name: "Class 9", Subitems: ["Math, English, Science, SSc", "Math, Science", "Math, Science, English", "Math, Science, SSc"] },
    { id: 5, Name: "Class 10", Subitems: ["Math, English, Science, SSc", "Math, Science", "Math, Science, English", "Math, Science, SSc"] }
  ]

  ngOnInit(): void {
    this.courses = [
      [
        {
          "name": "Class 6",
          "fees": "24000",
          "fees2": "18000",
          "no_sub": "4",
          "subjects": ["Math", "English", "Science", "SSc"],
          "timetable": {
            "mon": [
              "SSc",
              "Math",
              "English"
            ],
            "tue": [
              "Science",
              "SSc",
              "Math"
            ],
            "wed": [
              "Math",
              "Math",
              "Science"
            ],
            "thu": [
              "English",
              "Math",
              "Science"
            ],
            "fri": [
              "English",
              "SSc",
              "Science"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 6",
          "fees": "20000",
          "fees2": "14000",
          "no_sub": "2",
          "subjects": ["Math", "Science"],
          "timetable": {
            "mon": [
              "Math"
            ],
            "tue": [
              "Science",
              "Math"
            ],
            "wed": [
              "Math",
              "Math",
              "Science"
            ],
            "thu": [
              "Math",
              "Science"
            ],
            "fri": [
              "Science"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 6",
          "fees": "22000",
          "fees2": "16000",
          "no_sub": "3",
          "subjects": ["Math", "Science", "English"],
          "timetable": {
            "mon": [
              "Math",
              "English"
            ],
            "tue": [
              "Science",
              "Math"
            ],
            "wed": [
              "Math",
              "Math",
              "Science"
            ],
            "thu": [
              "English",
              "Math",
              "Science"
            ],
            "fri": [
              "English",
              "Science"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 6",
          "fees": "22000",
          "fees2": "16000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "SSc",
              "Math"
            ],
            "tue": [
              "Science",
              "SSc",
              "Math"
            ],
            "wed": [
              "Math",
              "Math",
              "Science"
            ],
            "thu": [
              "Math",
              "Science"
            ],
            "fri": [
              "SSc",
              "Science"
            ],
            "sat": [
              "Test"
            ]
          }
        }, 40
      ],
      [
        {
          "name": "Class 7",
          "fees": "24000",
          "fees2": "18000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "English",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Science",
              "SSc",
              "Math"
            ],
            "tue": [
              "English",
              "Math",
              "SSc"
            ],
            "wed": [
              "Science",
              "SSc",
              "Math"
            ],
            "thu": [
              "Science",
              "SSc",
              "English"
            ],
            "fri": [
              "Science",
              "English",
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 7",
          "fees": "20000",
          "fees2": "14000",
          "no_sub": "2",
          "subjects": [
            "Math",
            "Science"
          ],
          "timetable": {
            "mon": [
              "Science",
              "Math"
            ],
            "tue": [
              "Math"
            ],
            "wed": [
              "Science",
              "Math"
            ],
            "thu": [
              "Science"
            ],
            "fri": [
              "Science",
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 7",
          "fees": "22000",
          "fees2": "16000",
          "no_sub": "3",
          "subjects": [
            "Math",
            "Science",
            "English"
          ],
          "timetable": {
            "mon": [
              "Science",
              "Math"
            ],
            "tue": [
              "English",
              "Math"
            ],
            "wed": [
              "Science",
              "Math"
            ],
            "thu": [
              "Science",
              "English"
            ],
            "fri": [
              "Science",
              "English",
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 7",
          "fees": "22000",
          "fees2": "16000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Science",
              "SSc",
              "Math"
            ],
            "tue": [
              "Math",
              "SSc"
            ],
            "wed": [
              "Science",
              "SSc",
              "Math"
            ],
            "thu": [
              "Science",
              "SSc"
            ],
            "fri": [
              "Science",
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        }, 40
      ],
      [
        {
          "name": "Class 8",
          "fees": "24000",
          "fees2": "18000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "English",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Math",
              "English",
              "SSc"
            ],
            "tue": [
              "Math",
              "Science",
              "English"
            ],
            "wed": [
              "SSc",
              "Science",
              "English"
            ],
            "thu": [
              "Math",
              "Science",
              "SSc"
            ],
            "fri": [
              "Math",
              "Science",
              "SSc"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 8",
          "fees": "20000",
          "fees2": "14000",
          "no_sub": "2",
          "subjects": [
            "Math",
            "Science"
          ],
          "timetable": {
            "mon": [
              "Math"
            ],
            "tue": [
              "Math",
              "Science"
            ],
            "wed": [
              "Science"
            ],
            "thu": [
              "Math",
              "Science"
            ],
            "fri": [
              "Math",
              "Science"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 8",
          "fees": "22000",
          "fees2": "16000",
          "no_sub": "3",
          "subjects": [
            "Math",
            "Science",
            "English"
          ],
          "timetable": {
            "mon": [
              "Math",
              "English"
            ],
            "tue": [
              "Math",
              "Science",
              "English"
            ],
            "wed": [
              "Science",
              "English"
            ],
            "thu": [
              "Math",
              "Science"
            ],
            "fri": [
              "Math",
              "Science"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 8",
          "fees": "22000",
          "fees2": "16000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Math",
              "SSc"
            ],
            "tue": [
              "Math",
              "Science"
            ],
            "wed": [
              "SSc",
              "Science"
            ],
            "thu": [
              "Math",
              "Science",
              "SSc"
            ],
            "fri": [
              "Math",
              "Science",
              "SSc"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        40
      ],
      [
        {
          "name": "Class 9",
          "fees": "30000",
          "fees2": "24000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "English",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Math",
              "Science"
            ],
            "tue": [
              "Math",
              "Science"
            ],
            "wed": [
              "Science",
              "SSc"
            ],
            "thu": [
              "Math",
              "SSc"
            ],
            "fri": [
              "Math",
              "English"
            ],
            "sat": [
              "English",
              "Test"
            ]
          }
        },
        {
          "name": "Class 9",
          "fees": "24000",
          "fees2": "18000",
          "no_sub": "2",
          "subjects": [
            "Math",
            "Science"
          ],
          "timetable": {
            "mon": [
              "Math",
              "Science"
            ],
            "tue": [
              "Math",
              "Science"
            ],
            "wed": [
              "Science"
            ],
            "thu": [
              "Math"
            ],
            "fri": [
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 9",
          "fees": "26000",
          "fees2": "21000",
          "no_sub": "3",
          "subjects": [
            "Math",
            "Science",
            "English"
          ],
          "timetable": {
            "mon": [
              "Math",
              "Science"
            ],
            "tue": [
              "Math",
              "Science"
            ],
            "wed": [
              "Science"
            ],
            "thu": [
              "Math"
            ],
            "fri": [
              "Math",
              "English"
            ],
            "sat": [
              "English",
              "Test"
            ]
          }
        },
        {
          "name": "Class 9",
          "fees": "26000",
          "fees2": "21000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Math",
              "Science"
            ],
            "tue": [
              "Math",
              "Science"
            ],
            "wed": [
              "Science",
              "SSc"
            ],
            "thu": [
              "Math",
              "SSc"
            ],
            "fri": [
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        60
      ],
      [
        {
          "name": "Class 10",
          "fees": "30000",
          "fees2": "24000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "English",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Science",
              "Math"
            ],
            "tue": [
              "Science",
              "Math"
            ],
            "wed": [
              "SSc",
              "Science"
            ],
            "thu": [
              "English",
              "Math"
            ],
            "fri": [
              "English",
              "Math"
            ],
            "sat": [
              "SSc",
              "Test"
            ]
          }
        },
        {
          "name": "Class 10",
          "fees": "24000",
          "fees2": "18000",
          "no_sub": "2",
          "subjects": [
            "Math",
            "Science"
          ],
          "timetable": {
            "mon": [
              "Science",
              "Math"
            ],
            "tue": [
              "Science",
              "Math"
            ],
            "wed": [
              "Science"
            ],
            "thu": [
              "Math"
            ],
            "fri": [
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 10",
          "fees": "26000",
          "fees2": "21000",
          "no_sub": "3",
          "subjects": [
            "Math",
            "Science",
            "English"
          ],
          "timetable": {
            "mon": [
              "Science",
              "Math"
            ],
            "tue": [
              "Science",
              "Math"
            ],
            "wed": [
              "Science"
            ],
            "thu": [
              "English",
              "Math"
            ],
            "fri": [
              "English",
              "Math"
            ],
            "sat": [
              "Test"
            ]
          }
        },
        {
          "name": "Class 10",
          "fees": "26000",
          "fees2": "21000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "Science",
            "SSc"
          ],
          "timetable": {
            "mon": [
              "Science",
              "Math"
            ],
            "tue": [
              "Science",
              "Math"
            ],
            "wed": [
              "SSc",
              "Science"
            ],
            "thu": [
              "Math"
            ],
            "fri": [
              "Math"
            ],
            "sat": [
              "SSc",
              "Test"
            ]
          }
        },
        60
      ],
      [
        {
          "name": "RMS and Sainik Class 6",
          "fees": "24000",
          "fees2": "18000",
          "no_sub": "4",
          "subjects": [
            "Math",
            "English",
            "General Knowdedge",
            "Reasoning"
          ]
        },
        {
          "name": "RMS and Sainik Class 9",
          "fees": "30000",
          "fees2": "24000",
          "no_sub": "6",
          "subjects": [
            "Math",
            "English",
            "Science",
            "SSc",
            "Reasoning",
            "Hindi"
          ]
        },
        60
      ],
      [
        {
          "name": "Spoken English",
          "fees": "15000",
          "fees2": "11500",
          "no_sub": "2",
          "subjects": [
            "English Grammar",
            "English Debate"
          ],
          "timetable": {
            "mon": [
              "English Grammar"
            ],
            "tue": [
              "English Grammar"
            ],
            "wed": [
              "English Grammar"
            ],
            "thu": [
              "English Grammar"
            ],
            "fri": [
              "English Debate"
            ],
            "sat": [
              "English Debate"
            ]
          }
        },
        60
      ]
    ]
    if (this.cookieService.get('user') != "") {
      this.loggedin = true;
    }

    this.openOrCloseModal('selcourse');
    this.activecourse = this.courses[0];
  }
  subItems: Array<any> = [];
  subItemsname: String = "";
  changeItems($event: any, itemname: any) {
    this.subItems = this.ClassList.find(con => con.id == itemname).Subitems;
    this.subItemsname = this.ClassList.find(con => con.id == itemname).Name;
    this.course_select.controls.subcourse.setValue("")
  }

  CheckCourse() {
    var subid = +this.course_select.controls.subcourse.value;
    var id = +this.course_select.controls.course.value - 1;
    this.course = this.courses[id][subid];
    this.class_time = this.courses[id][this.courses[id].length - 1];
    this.openOrCloseModal('selcourse');
  }

  openOrCloseModal(id: string) {
    var modal = (document.getElementById(id) as HTMLDivElement);
    var modal_form = (modal.getElementsByTagName("form")[0] as HTMLFormElement);
    if (modal_form) { modal_form.reset(); }
    var bodyelement = (document.getElementById("mainbody") as HTMLBodyElement)
    if (modal.style.display == 'flex') {
      modal.style.display = 'none';
    } else {
      if (id == "registermodal" && this.loggedin) {
        this.router.navigate(['dashboard']);
      }
      modal.style.display = 'flex';
    }
  }
  getcd(cd: any) {
    this.activecourse = cd;
  }

}






// [

//   [
//     {
//       "image": "../../assets/class6poster.JPG",
//       "name": "CLASS 6 Main Subjects",
//       "fees": 1360,
//       "fees2": 14500,
//       "fees3": 7500,
//       "no_subjects": 5,
//       "subjects": ["English", "Mathematics", "Science", "Social Science"],
//       "select_sub": false,
//       "message": "Complete Syllabus",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class6poster.JPG",
//       "name": "Math, Science, SSC",
//       "fees": 1050,
//       "fees2": 11000,
//       "fees3": 5800,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science", "Social Science"],
//       "select_sub": false,
//       "message": "Math, Science and SSC",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class6poster.JPG",
//       "name": "Math, Science, ENGLISH",
//       "fees": 1050,
//       "fees2": 11000,
//       "fees3": 5800,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science", "English"],
//       "select_sub": false,
//       "message": "Math, Science and English",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class6poster.JPG",
//       "name": "Maths, Science",
//       "fees": 800,
//       "fees2": 8500,
//       "fees3": 4500,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science"],
//       "select_sub": false,
//       "message": "Maths and Science",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     }],
//   [
//     {
//       "image": "../../assets/class7poster.JPG",
//       "name": "CLASS 7 Main Subjects",
//       "fees": 1360,
//       "fees2": 14500,
//       "fees3": 7500,
//       "no_subjects": 5,
//       "subjects": ["English", "Mathematics", "Science", "Social Science"],
//       "select_sub": false,
//       "message": "Complete Syllabus",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class7poster.JPG",
//       "name": "Math, Science, SSC",
//       "fees": 1050,
//       "fees2": 11000,
//       "fees3": 5800,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science", "Social Science"],
//       "select_sub": false,
//       "message": "Math, Science and SSC",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class7poster.JPG",
//       "name": "Math, Science, ENGLISH",
//       "fees": 1050,
//       "fees2": 11000,
//       "fees3": 5800,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science", "English"],
//       "select_sub": false,
//       "message": "Math, Science and English",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class7poster.JPG",
//       "name": "Maths, Science",
//       "fees": 800,
//       "fees2": 8500,
//       "fees3": 4500,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science"],
//       "select_sub": false,
//       "message": "Maths and Science",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     }],
//   [
//     {
//       "image": "../../assets/class8poster.JPG",
//       "name": "CLASS 8 Main Subjects",
//       "fees": 1360,
//       "fees2": 14500,
//       "fees3": 7500,
//       "no_subjects": 5,
//       "subjects": ["English", "Mathematics", "Science", "Social Science"],
//       "select_sub": false,
//       "message": "Complete Syllabus",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class8poster.JPG",
//       "name": "Math, Science, ENGLISh",
//       "fees": 1050,
//       "fees2": 11000,
//       "fees3": 5800,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science", "Social Science"],
//       "select_sub": false,
//       "message": "Math, Science and SSC",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class8poster.JPG",
//       "name": "Math, Science, ENGLISH",
//       "fees": 1050,
//       "fees2": 11000,
//       "fees3": 5800,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science", "English"],
//       "select_sub": false,
//       "message": "Math, Science and English",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     },
//     {
//       "image": "../../assets/class8poster.JPG",
//       "name": "Maths, Science",
//       "fees": 800,
//       "fees2": 8500,
//       "fees3": 4500,
//       "no_subjects": 5,
//       "subjects": ["Mathematics", "Science"],
//       "select_sub": false,
//       "message": "Maths and Science",
//       "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//     }],
//   [{
//     "image": "../../assets/class9poster.JPG",
//     "name": "CLASS 9 Main Subjects",
//     "fees": 1970,
//     "fees2": 21640,
//     "fees3": 11000,
//     "no_subjects": 5,
//     "subjects": ["English", "Mathematics", "Science", "Social Science"],
//     "select_sub": false,
//     "message": "Complete Syllabus",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   },
//   {
//     "image": "../../assets/class9poster.JPG",
//     "name": "Math, Science, English",
//     "fees": 1480,
//     "fees2": 16000,
//     "fees3": 8500,
//     "no_subjects": 5,
//     "subjects": ["Mathematics", "Science", "English"],
//     "select_sub": false,
//     "message": "Math, Science and English",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   },
//   {
//     "image": "../../assets/class9poster.JPG",
//     "name": "Math, Science, SSC",
//     "fees": 1480,
//     "fees2": 16000,
//     "fees3": 8500,
//     "no_subjects": 5,
//     "subjects": ["Mathematics", "Science", "Social Science"],
//     "select_sub": false,
//     "message": "Math, Science and ENGLISh",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   },
//   {
//     "image": "../../assets/class9poster.JPG",
//     "name": "Maths, Science",
//     "fees": 990,
//     "fees2": 10500,
//     "fees3": 5500,
//     "no_subjects": 5,
//     "subjects": ["Mathematics", "Science"],
//     "select_sub": false,
//     "message": "Maths and Science",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   }],
//   [{
//     "image": "../../assets/class10poster.JPG",
//     "name": "CLASS 10 Main Subjects",
//     "fees": 1970,
//     "fees2": 21640,
//     "fees3": 11000,
//     "no_subjects": 5,
//     "subjects": ["English", "Mathematics", "Science", "Social Science"],
//     "select_sub": false,
//     "message": "Complete Syllabus",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   },
//   {
//     "image": "../../assets/class10poster.JPG",
//     "name": "Math, Science, English",
//     "fees": 1480,
//     "fees2": 16000,
//     "fees3": 8500,
//     "no_subjects": 5,
//     "subjects": ["Mathematics", "Science", "English"],
//     "select_sub": false,
//     "message": "Math, Science and English",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   },
//   {
//     "image": "../../assets/class10poster.JPG",
//     "name": "Math, Science, ENGLISh",
//     "fees": 1480,
//     "fees2": 16000,
//     "fees3": 8500,
//     "no_subjects": 5,
//     "subjects": ["Mathematics", "Science", "Social Science"],
//     "select_sub": false,
//     "message": "Math, Science and SSC",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   },
//   {
//     "image": "../../assets/class10poster.JPG",
//     "name": "Maths, Science",
//     "fees": 990,
//     "fees2": 10500,
//     "fees3": 5500,
//     "no_subjects": 5,
//     "subjects": ["Mathematics", "Science"],
//     "select_sub": false,
//     "message": "Maths and Science",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   }],
//   [{
//     "image": "../../assets/rmsposter.JPG",
//     "name": "RMS & Sainik School Class 6",
//     "fees": 1360,
//     "fees2": 14500,
//     "fees3": 7500,
//     "no_subjects": 4,
//     "subjects": ["English", "Mathematics", "GK", "Reasoning"],
//     "select_sub": false,
//     "message": "Complete Syllabus with Mock Test",
//     "note": "Classes starts from 20 March 2022 till the Entrance Exam"
//   },
//   {
//     "image": "../../assets/rmsposter.JPG",
//     "name": "RMS & Sainik School Class 9",
//     "fees": 1360,
//     "fees2": 14500,
//     "fees3": 7500,
//     "no_subjects": 4,
//     "subjects": ["English", "Mathematics", "Science", "Reasoning", "Hindi`"],
//     "select_sub": false,
//     "message": "Complete Syllabus with Mock Test",
//     "note": "Classes starts from 20 March 2022 till the Entrance Exam"
//   }],
//   [{
//     "image": "../../assets/english.JPG",
//     "name": "English Grammar, Debate",
//     "fees": 750,
//     "fees2": 8000,
//     "fees3": 4500,
//     "no_subjects": 5,
//     "subjects": ["English Grammar", "Debate"],
//     "select_sub": false,
//     "message": "English Grammar and Debate",
//     "note": "Classes starts from 4 April 2022 till the Final(Annual Exam)"
//   }]
// ]
