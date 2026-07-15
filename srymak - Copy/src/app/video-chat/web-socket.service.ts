import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: any;

  readonly url:string="ws://192.168.29.211:3000"
  constructor() {
    this.socket=io(this.url)
  }


  listen(eventName:any) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data:any) => {
        subscriber.next(data);
      })
    })
  }



}
