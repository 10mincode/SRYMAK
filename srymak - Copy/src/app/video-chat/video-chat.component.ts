import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { io } from 'socket.io-client';
// import * as ss from 'socket.io-stream';
import { WebSocketService } from './web-socket.service';
import { isPlatformBrowser } from '@angular/common';
import { debug } from 'console';
import * as uuid from 'uuid';
import JsonStreamStringify from 'json-stream-stringify';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChatComponent implements OnInit {
  socket: any;
  videoGrid: HTMLDivElement | undefined;
  mic: boolean = true;
  camera: boolean =true;
  userId: string = uuid.v4();
  student_details: any[]=[];
;
  @HostListener('window:keydown', ['$event'])
  keyEvent(e: KeyboardEvent) {
    console.log(e);
    var key = e.which || e.keyCode;
    var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection
    if (key == 77 && ctrl) {
      // this.ToggleMic();
    }
  }

  constructor(private activatedRoute: ActivatedRoute, private webSocketService: WebSocketService, @Inject(PLATFORM_ID) private _platform: Object) {
    this.socket = io("ws://192.168.29.211:3080");

  }
  toasttext: string = 'Hello World';
  toasts = [];
  roomId: string = "";
  ourstream!: MediaStream;
  ngOnInit(): void {
    this.videoGrid = document.getElementById('videoGrid') as HTMLDivElement
    this.activatedRoute.paramMap.subscribe(x => {
      let id = x.get('roomId');
      console.log(id);
      if (id) this.roomId=id
    });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      var videomy = document.createElement('video') as HTMLVideoElement;
      videomy.id = 'myvideo';
      this.addVideoStream(videomy, stream);
      console.log(stream);
      // ss(this.socket).emit('join-room', this.roomId, this.userId, prompt("Enteryour Name"),stream)
    })
    this.socket.on('stu-details', (stu_details: any) => {
      this.student_details = []

      for (const [key, value] of Object.entries(stu_details)) {
        var temp = { "id": key, "name": stu_details[key].name, "stream": stu_details[key].stream }
        this.student_details.push(temp);

        console.log(stu_details)
        console.log(this.student_details)
      }
      this.student_details.forEach((student) => {
        var video = document.createElement("video");
        this.addVideoStream(video, student.stream);
      })
    });

    this.socket.on('user-disconnected', (userId:any) => {
    })
    this.socket.on('user-connected', (roomId: any, userId: any, stream: any) => {
      if (roomId == this.roomId) {
        alert("Came");
        var videomy = document.createElement('video') as HTMLVideoElement;
        videomy.id = `${userId}`;
        this.addVideoStream(videomy, stream);
      }
    })
  }
  addVideoStream(video: HTMLVideoElement, stream: any) {
    console.log(stream);
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play()
    }
    this.videoGrid?.append(video)
  }

  Toast() {
    var toast = (document.createElement('app-toast'));
    toast.setAttribute("[text]", "toasttext");
    (document.getElementById("mainbody") as HTMLBodyElement).appendChild(toast);

  }
  Destroy(e: any) {
    (e.target as HTMLElement).remove();
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}





