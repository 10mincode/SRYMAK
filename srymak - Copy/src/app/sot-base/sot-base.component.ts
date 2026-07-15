import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sot-base',
  templateUrl: './sot-base.component.html',
  styleUrls: ['./sot-base.component.css']
})
export class SotBaseComponent implements OnInit {
  href: string ="";

  constructor(private formBuilder:FormBuilder,private router:Router,private route:ActivatedRoute,private cookieService: CookieService,private http: HttpClient) { }
  fragment: any;
  loggedin: boolean=false;

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.href = this.router.url;
    alert(this.href);
    if (this.cookieService.get('user')) {
      this.loggedin = true;
    }
  }
  openOrCloseModal(id: string) {
    var modal = (document.getElementById(id) as HTMLDivElement);
    var modal_form = (modal.getElementsByTagName("form")[0] as HTMLFormElement);
    if (modal_form) { modal_form.reset(); }
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

}
