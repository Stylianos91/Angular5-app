import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {
  }

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put('https://angularstelios.firebaseio.com/data.json', servers, {headers: headers});
  }
  getServers() {
    return this.http.get('https://angularstelios.firebaseio.com/data.json').pipe(map(
      (response: HttpResponse<any>) => {
        const data = response;
        console.log('data ' + data);
        return data;
      }
    ));
  }

}

