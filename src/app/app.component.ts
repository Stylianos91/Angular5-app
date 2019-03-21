import { Component } from '@angular/core';
import {ServerService} from './server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    console.log('on save was called');
    this.serverService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  onGet() {
  this.serverService.getServers().subscribe(
    (responseData: any) => {
      console.log('responseData' + responseData);
      // I am good!!
      this.servers = responseData;
    },
    (error) => console.log(error)
  );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
