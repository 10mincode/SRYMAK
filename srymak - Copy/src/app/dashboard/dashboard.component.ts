import { Router } from '@angular/router';
import { Component, OnInit, QueryList } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  details: any;
  linknot:boolean=false;
  course:any ;
  class_time: any ;
  classjoinLink:string="";
  constructor(private cookieService: CookieService, private router:Router,private http:HttpClient) { }
  user_credentials: any;
  ClassList: Array<any> = [
    {id:7,Name:"English Speaking",Subitems:["Spoken English"]},
    {id:6,Name:"RMS and Sainik",Subitems:["Class 6","Class 9"]},
    {id:1,Name:"Class 6",Subitems:["Math, English, Science, SSc","Math, Science","Math, Science, English","Math, Science, SSc"]},
    {id:2,Name:"Class 7",Subitems:["Math, English, Science, SSc","Math, Science","Math, Science, English","Math, Science, SSc"]},
    {id:3,Name:"Class 8",Subitems:["Math, English, Science, SSc","Math, Science","Math, Science, English","Math, Science, SSc"]},
    {id:4,Name:"Class 9",Subitems:["Math, English, Science, SSc","Math, Science","Math, Science, English","Math, Science, SSc"]},
    {id:5,Name:"Class 10",Subitems:["Math, English, Science, SSc","Math, Science","Math, Science, English","Math, Science, SSc"]},
    {id:8,Name:"Class 11",Subitems:["PCM","PCB","Commerce"]},
    {id:9,Name:"Class 12",Subitems:["PCM","PCB","Commerce"]}
  ]
  courses =[
    [
      {
      "name":"Class 6",
      "fees":"24000",
      "fees2":"18000",
      "no_sub":"4",
      "subjects":["Math","English","Science","SSc"],
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
        ]}
      },
      {
      "name":"Class 6",
      "fees":"20000",
      "fees2":"14000",
      "no_sub":"2",
      "subjects":["Math","Science"],
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
        ]}
      },
      {
      "name":"Class 6",
      "fees":"22000",
      "fees2":"16000",
      "no_sub":"3",
      "subjects":["Math","Science","English"],
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
        ]}
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
      },40
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
      },40
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
    ],
    [
      {
        "name": "Class 11 PCM",
        "fees": "45500",
        "fees2": "39000",
        "no_sub": "3",
        "subjects": [
          "Physics",
          "Chemistry",
          "Mathematics"
        ],
        "timetable": {
          "mon": [
            "Maths","Physics"
          ],
          "tue": [
            "Chemistry","Maths"
          ],
          "wed": [
            "Physics","Chemistry"
          ],
          "thu": [
            "Maths","Physics"
          ],
          "fri": [
            "Chemistry","Maths"
          ],
          "sat": [
            "Physics","Chemistry"
          ]
        }
      },
      {
        "name": "Class 11 PCB",
        "fees": "45500",
        "fees2": "39000",
        "no_sub": "3",
        "subjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "timetable": {
          "mon": [
            "Biology","Physics"
          ],
          "tue": [
            "Chemistry","Biology"
          ],
          "wed": [
            "Physics","Chemistry"
          ],
          "thu": [
            "Biology","Physics"
          ],
          "fri": [
            "Chemistry","Biology"
          ],
          "sat": [
            "Physics","Chemistry"
          ]
        }
      },
      {
        "name": "Class 11 Commerce",
        "fees": "40500",
        "fees2": "34500",
        "no_sub": "3",
        "subjects": [
          "Accountancy",
          "Economics",
          "Business Studies"
        ],
        "timetable": {
          "mon": [
            "Accountancy","Economics"
          ],
          "tue": [
            "Business Studies","Accountancy"
          ],
          "wed": [
            "Economics","Business Studies"
          ],
          "thu": [
            "Accountancy","Economics"
          ],
          "fri": [
            "Business Studies","Accountancy"
          ],
          "sat": [
            "Economics","Business Studies"
          ]
        }
      },
      60
    ],
    [
      {
        "name": "Class 12 PCM",
        "fees": "45500",
        "fees2": "39000",
        "no_sub": "3",
        "subjects": [
          "Physics",
          "Chemistry",
          "Mathematics"
        ],
        "timetable": {
          "mon": [
            "Maths","Physics"
          ],
          "tue": [
            "Chemistry","Maths"
          ],
          "wed": [
            "Physics","Chemistry"
          ],
          "thu": [
            "Maths","Physics"
          ],
          "fri": [
            "Chemistry","Maths"
          ],
          "sat": [
            "Physics","Chemistry"
          ]
        }
      },
      {
        "name": "Class 12 PCB",
        "fees": "45500",
        "fees2": "39000",
        "no_sub": "3",
        "subjects": [
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "timetable": {
          "mon": [
            "Biology","Physics"
          ],
          "tue": [
            "Chemistry","Biology"
          ],
          "wed": [
            "Physics","Chemistry"
          ],
          "thu": [
            "Biology","Physics"
          ],
          "fri": [
            "Chemistry","Biology"
          ],
          "sat": [
            "Physics","Chemistry"
          ]
        }
      },
      {
        "name": "Class 12 Commerce",
        "fees": "40500",
        "fees2": "34500",
        "no_sub": "3",
        "subjects": [
          "Accountancy",
          "Economics",
          "Business Studies"
        ],
        "timetable": {
          "mon": [
            "Accountancy","Economics"
          ],
          "tue": [
            "Business Studies","Accountancy"
          ],
          "wed": [
            "Economics","Business Studies"
          ],
          "thu": [
            "Accountancy","Economics"
          ],
          "fri": [
            "Business Studies","Accountancy"
          ],
          "sat": [
            "Economics","Business Studies"
          ]
        }
      },
      60
    ]
  ]
//   classes_link = {
//     "Class 6": "https://meet.google.com/nrw-tvob-gtm",
//     "Class 9": "https://meet.google.com/fgo-nebz-gdb",
//     "Class 7": "https://meet.google.com/aqq-cgxy-ghj",
//     "Class 8": "https://meet.google.com/egi-qmir-siw",
//     "Class 10": "https://meet.google.com/pnr-czxj-ngx",
//     "Class 11": "https://meet.google.com/kjb-qhcj-sgo",
//     "Class 12": "https://meet.google.com/kyn-ydfb-tcx",
//     "RMS 6": "https://meet.google.com/qid-tiys-juv",
//     "RMS 9": "https://meet.google.com/bhv-xooj-qfw",
//     "ENGLISH SPEAKING": "https://meet.google.com/okt-fqxb-geu"
// }
  classes_link:{ [key: string]: string } = {
    "Class 6": "https://meet.google.com/nrw-tvob-gtm",
    "Class 9": "https://meet.google.com/fgo-nebz-gdb",
    "Class 7": "https://meet.google.com/aqq-cgxy-ghj",
    "Class 8": "https://meet.google.com/egi-qmir-siw",
    "Class 10": "https://meet.google.com/pnr-czxj-ngx",
    "Class 11": "https://meet.google.com/kjb-qhcj-sgo",
    "Class 12": "https://meet.google.com/kyn-ydfb-tcx",
    "RMS 6": "https://meet.google.com/qid-tiys-juv",
    "RMS 9": "https://meet.google.com/bhv-xooj-qfw",
    "ENGLISH SPEAKING": "https://meet.google.com/okt-fqxb-geu"
}
coursecodes:{ [key: string]: string }={"1":"Class 6",
  "2":"Class 7",
  "3":"Class 8",
  "4":"Class 9",
  "5":"Class 10",
  "6":"RMS 6",
  "7":"ENGLISH SPEAKING",
  "8":"Class 11",
  "9":"Class 12"}
  ngOnInit(): void {
    if (this.cookieService.get('user')) {
      console.log(JSON.parse(this.cookieService.get('user')))
      this.user_credentials = JSON.parse(this.cookieService.get('user'))

      this.http.post<any>('https://server.srymak.com/get_stu_d', {
        email: this.user_credentials.email, passw: atob(this.user_credentials.password)
      }).subscribe((data) => {
        if (data.success == true) {
          this.details = data.details;
          if(this.details.jlink=="https://www.srymak.com/dashboard"){
            this.linknot=true;
          }
          var id = +this.details.course.substring(0, 1)-1;

          var subid = +this.ClassList.findIndex(item=>item.Subitems.includes(this.details.course.substring(1)));
          this.course = this.courses[id][subid];
          this.class_time = this.courses[id][this.courses[id].length-1];
          console.log(this.course)

          console.log(this.details)
          this.router.navigate(['dashboard'])
        }
      })
    } else {
      this.router.navigate(['home'])
    }

  }
  JoinClass(){
    this.classjoinLink=this.classes_link[this.coursecodes[this.details.course.substring(0, 1)]]

  }
  CheckCourse() {
    var subid = +this.details.course.substring(0, 1);

    var id = +this.ClassList.indexOf(this.details.course.substring(1));
    this.course = this.courses[id][subid];
    this.class_time = this.courses[id][this.courses[id].length-1];
    this.alert(String(this.course))
  }
  classes: 0 | undefined;
  classes_my = [{
    "00":10,
    "01":10,
    "02":10,
    "03":10,
    "04":10,
    "10":10,
    "11":10,
    "12":10,
    "13":10,
    "14":10,
    "20":10,
    "21":10,
    "22":10,
    "23":10,
    "24":10,
    "30":10,
    "31":10,
    "32":10,
    "33":10,
    "40":10,
    "41":10,
    "42":10,
    "43":10,
    "ENG":10,
    "RMS":10,
  }]
  _getKeyValue_ = (key: string ,obj: Record<string, any>) => obj[key];

  alert(s:any){
    window.alert(s);
  }
  tooglSidebar() {
    var sidebar=(document.getElementById('sidebar') as HTMLDivElement)
    var profile=(document.getElementById('profile') as HTMLDivElement)
    var pages=(document.getElementById('pages') as HTMLDivElement)
    var logout=(document.getElementById('logout') as HTMLDivElement)
    sidebar.classList.toggle('opended-sidebar')
    profile.classList.toggle('opened')
    pages.classList.toggle('opened')
    logout.classList.toggle('opened')
  }
  logout_user() {
    this.cookieService.delete('user');
    this.router.navigate(['home'])
  }
}
