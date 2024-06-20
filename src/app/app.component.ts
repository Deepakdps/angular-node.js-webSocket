import { Component } from '@angular/core';
import { SignalService } from './signal.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleApp';
  hookNumber = '';
  constructor(private signalService  : SignalService){
    this.signalService.getSignal();
    this.signalService.messages$.subscribe(v =>{
      console.log('v=>>>>>>>>>>',v)
      this.hookNumber = v;
    })

   

  }


}
