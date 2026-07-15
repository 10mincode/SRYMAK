import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() course_details: any;
  @Input() course_class_time: any;
  @Input() loggedin: any;
  @Output() cd = new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.course_details);
  }
  openOrCloseModal(id: string) {
    this.cd.emit(this.course_details);
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
