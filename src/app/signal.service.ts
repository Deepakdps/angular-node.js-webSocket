import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignalService {
  ws? : WebSocket;
  url = 'ws://localhost:8080';
  messages$ = new Subject<string>;
  
 
  constructor(
    private http :HttpClient
  ) { }

  getSignal(){
    this.ws = new WebSocket(this.url) ;
    this.ws.addEventListener('on',()=>{
    this.messages$.next("server connected")


    })
    this.ws.addEventListener('message',(event: MessageEvent<string>)=>{
    this.messages$.next(event.data)
    
  
    })
    this.ws.addEventListener('error',(error)=>{
    this.messages$.next(`error occured ${error}`)
    
  
    })
    
  }
}
