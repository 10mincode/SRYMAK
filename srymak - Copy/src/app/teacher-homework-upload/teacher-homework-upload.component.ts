import { formatDate } from '@angular/common';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-teacher-homework-upload',
  templateUrl: './teacher-homework-upload.component.html',
  styleUrls: ['./teacher-homework-upload.component.css']
})
export class TeacherHomeworkUploadComponent implements OnInit {

  constructor( @Inject(LOCALE_ID) public locale: string) {}
  public currentDa = new Date();
  currentD=new Date(this.currentDa.toLocaleString());
  ngOnInit(): void {
    //alert(this.currentD.toLocaleTimeString())
    // this.currentDa=formatDate(this.currentD,"MM-dd-yyyy",this.locale,"+0530");
    // this.currentD=new Date(this.currentDa)
    // alert(this.currentD.toISOString())

  }

}
