import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { ISettings } from "../mile-settings.model";

@Injectable()
export class SettingsService {
  apiBase: string = 'http://localhost:49499/api/';
  constructor(private http:Http) { }

  // getUserSettings(id: number): Observable<ISettings>{
  //   return this.http.get(this.apiBase + "settings/" + id)
  //   .map((response: Response) => {
  //     return <ISettings>response.json();
  //   }).catch(this.handleError);
  // }

  getUserSettings(id: number){
    return USERSETTINGS;
  }

  saveUserSettings(settings): Observable<ISettings>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    console.log(settings);
    
    return this.http.put(this.apiBase + 'settings/' + settings.id, JSON.stringify(settings), 
      options).map((response: Response) => 
      {
        console.log(response);
        return response.json();
      }).catch(this.handleError);
  }
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
  

}

const USERSETTINGS : ISettings = {
    milesToOffice: 25,
    moneyPerMile: 0.3
}