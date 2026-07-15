import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  mime: any;

  constructor(private http: HttpClient) { }
  messages = [
    {"message":"HIIIIIIIII HELLOOO","status":"sent"},
    {"message":"HIIIIIIIII HELLOOO","status":"sent"},
    {"message":"HIIIIIIIII HELLOOO","status":"came"},
    {"message":"HIIIIIIIII HELLOOO","status":"came"},
    {"message":"HIIIIIIIII HELLOOO","status":"sent"},
    {"message":"HIIIIIIIII HELLOOO","status":"came"}
  ]
  ngOnInit(): void {
    this.http.get<any>('https://server.srymak.com/homework_get/atuldagur', {
    }).subscribe((data) => {
      console.log(data)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element.status == "1") {
          data[index].status = "sent"
          console.log(element.status)

        }


      }
      this.messages = data;
      console.log(this.messages)
    });

  }
  OnChangeFile(event: any) {
    const formData = new FormData();
    this.mime =  event.target.files[0];
    // this.http.post<any>('https://server.srymak.com/homework_set/', {
    //   mime: event.target.files[0],
    //   status: 1,
    //   studentid: "atuldagur"
    // }).subscribe((data) => {
    //   console.log(data)
    //   for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     console.log(element.message)

    //   }
    // })
  }
  onFilesDropped(event:any) {
    (document.getElementById("upload_input") as HTMLInputElement).files = event.addedFiles;
  }
  send_message(){
    var formData = new FormData();
    var message = (document.getElementById('messagebox') as HTMLInputElement).value
    formData.append("message", message);
    formData.append("studentid", "atuldagur");
    formData.append("status", "1");
    formData.append("mime", this.mime, this.mime.name);
    this.http.post<any>('https://server.srymak.com/homework_set/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).subscribe((data) => {
      console.log(data)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element.status == "1") {
          data[index].status = "sent"
          console.log(element.status)

        }


      }
      this.messages = data;
      console.log(this.messages)
    });
      (document.getElementsByName("messagebox")[0] as HTMLInputElement).value = "";
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
      modal.style.display = 'flex';
      bodyelement.style.overflow = 'hidden';
    }
  }

}
