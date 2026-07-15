import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NonNullAssert } from '@angular/compiler';
import { assert } from 'console';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sot',
  templateUrl: './sot.component.html',
  styleUrls: ['./sot.component.css']
})
export class SotComponent implements OnInit {
  loggedin: boolean=false;

  constructor(private formBuilder:FormBuilder,private router:Router,private route:ActivatedRoute,private cookieService: CookieService,private http: HttpClient) { }
  form: FormGroup = new FormGroup({});
  fragment: any;
  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.form=this.formBuilder.group({
      profile:['']
    });
    if (this.cookieService.get('user')) {
      this.loggedin = true;
    }
  }
  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.RegisterSOT(file);
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
  RegisterSOT(file:any){
    const formData = new FormData();
    formData.append('name', file, file.name);
    formData.append('mname', file, file.name);
    formData.append('fname', file, file.name);
    formData.append('', file, file.name);
    formData.append('image', file, file.name);
    formData.append('image', file, file.name);
    formData.append('image', file, file.name);
    formData.append('image', file, file.name);
    this.http.post<any>('https://server.srymak.com/s/testu/',formData).subscribe((data: any)=>{
      alert(data);
    })
  }
}
