import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online { color: white}`]
})
export class ServerComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated: boolean = false;
  serverID: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    // setTimeout(() => {
    // this.allowNewServer = true ;
    // }, 2000);    // if Math.random >0.5 then 'online' else 'offline';
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }


  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was Created with Name ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }
}
