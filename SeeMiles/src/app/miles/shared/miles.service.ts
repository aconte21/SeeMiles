import { ISortValues } from './sort-values.model';
import { IMiles } from './miles.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MilesService {
  apiBase: string = 'http://localhost:49499/';

  miles: IMiles[];
  constructor(private http:Http) { }

  getMiles():Observable<IMiles[]>{
    return this.http.get(this.apiBase + 'api/miles')
    .map((response: Response) =>
    {
      return <IMiles[]>response.json()
    }).catch(this.handleError);
  }
  
  saveMile(mile): Observable<IMiles>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.apiBase + 'api/miles', JSON.stringify(mile), options)
    .map((response: Response) => 
    {
      return response.json();
    }).catch(this.handleError);
  }
  updateMile(mile): Observable<IMiles>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.apiBase + 'api/miles/' + mile.id, JSON.stringify(mile), options)
    .map((response: Response) => 
    {
      return response.json();
    }).catch(this.handleError);
  }
  deleteMile(mile): Observable<IMiles>{
     return this.http.delete(this.apiBase + 'api/miles/' + mile.id)
     .catch(this.handleError);
  }
/*TODO: if you make mile-detail page use this code in its ngOnInit method...
  this.route.params.forEach((params: Params) => {
    this.milesService.getMileById(+params['id']).subscribe((mile: IMiles) => {
      this.mile = mile;
    })
  })
*/
    getMileById(id: number):Observable<IMiles>{
      return this.http.get(this.apiBase + 'api/miles/' + id)
      .map((response: Response) =>
      {
        return <IMiles>response.json();
      }).catch(this.handleError)
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
  getMilesByDate(sortValues: ISortValues){
    var miles: IMiles[];
    console.log(this.miles);
    return null;
/*
    if (sortValues.month == "" && sortValues.year == "") return null

    else
    return miles = this.miles.filter(function(mile){
      if (sortValues.month != "" && sortValues.year != "")
        return (mile.date.match(sortValues.year) && mile.date.match(sortValues.month));
      else if (sortValues.month !="")
        return mile.date.match(sortValues.month)
      else if (sortValues.year != "")
        return mile.date.match(sortValues.year)
    })
    */
  }

}
