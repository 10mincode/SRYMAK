import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard-base',
  templateUrl: './dashboard-base.component.html',
  styleUrls: ['./dashboard-base.component.css']
})
export class DashboardBaseComponent implements OnInit {

  details: any;
  course_t: any;
  courseclass: any;
  coursecodes:{ [key: string]: string }={"1":"Class 6",
  "2":"Class 7",
  "3":"Class 8",
  "4":"Class 9",
  "5":"Class 10",
  "6":"RMS & Sainik School",
  "7":"English Speaking",
  "8":"Class 11",
  "9":"Class 12"}
  constructor(private cookieService: CookieService, public router: Router, private http: HttpClient) { }
  user_credentials: any;
  ngOnInit(): void {
    if (this.cookieService.get('user')) {
      console.log(JSON.parse(this.cookieService.get('user')))
      this.user_credentials = JSON.parse(this.cookieService.get('user'))
      this.http.post<any>('https://server.srymak.com/get_stu_d', {
        email: this.user_credentials.email, passw: atob(this.user_credentials.password)
      }).subscribe((data) => {
        if (data.success == true) {
          this.details = data.details;
          console.log("details");
          this.course_t=String(this.details.course);
          const separatorIndex: number = this.course_t.indexOf(" ");

          this.courseclass = this.course_t.substring(0, 1);
          //this.alert(numSlices+" sub"+subjectsString)
          this.cookieService.set('user-details', this.details);
        }else{
          this.alert("Not succeedd");
        }
      })
    } else {
      this.router.navigate(['home'])
    }
  }
  alert(s:any) {

    window.alert(s);
  }
  tooglSidebar() {
    var sidebar = (document.getElementById('sidebar') as HTMLDivElement)
    var profile = (document.getElementById('profile') as HTMLDivElement)
    var pages = (document.getElementById('pages') as HTMLDivElement)
    var logout = (document.getElementById('logout') as HTMLDivElement)
    var hamburger = (document.getElementById('hamburger') as HTMLDivElement)
    hamburger.classList.toggle('opened')
    sidebar.classList.toggle('opended-sidebar')
    profile.classList.toggle('opened')
    pages.classList.toggle('opened')
    logout.classList.toggle('opened')
  }
  logout_user() {
    if (window.confirm('Do you really want to LOGOUT?')) {
      this.cookieService.delete('user');
      this.router.navigate(['home'])
    } else {
      // user clicked Cancel
      // do nothing or handle Cancel case here
    }

  }

}
