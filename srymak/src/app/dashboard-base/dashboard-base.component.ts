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
          this.cookieService.set('user-details', this.details);
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
