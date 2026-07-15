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

  constructor(private cookieService: CookieService, private router:Router,private http:HttpClient) { }
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
          this.router.navigate(['dashboard'])
        }
      })
    } else {
      this.router.navigate(['home'])
    }
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
