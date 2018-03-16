import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true ;
    }, 2000);
  }

  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was Created with Name '+ this.serverName;
  }

  onUpdateServerName(event: any) {
  console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }
}
