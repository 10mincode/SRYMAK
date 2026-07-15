import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private appService: AppserviceService) { }
  contactform = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'mobile': new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+'), Validators.minLength(10)]),
    'message': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    'email': new FormControl(null, [Validators.required, Validators.email])
  })
  ngOnInit(): void {
  }

  send_message() {


    var otp = Math.floor(Math.random() * 99999) + 10000;
    var mobilenumber = (document.getElementById("myemail") as HTMLInputElement).value;
    var message = (document.getElementById("mymessage") as HTMLInputElement).value + "  \r\nEMAIL: " + this.contactform.controls.email.value + " \r\nMOBILE: " + this.contactform.controls.mobile.value + " \r\nNAME: " + this.contactform.controls.name.value;
    var url = `https://server.srymak.com/send_mail/?message=${message}&subject=CONTACT%20MESSAGES&email=atuldagur2009@gmail.com`;
    console.log(url);
    this.appService.getOTP(url).subscribe(response => {
      console.log(response);
      alert("Message Sent Successfully")
    },
      error => {
        console.log(error);
        alert(JSON.stringify(error))
      });
  }
}
