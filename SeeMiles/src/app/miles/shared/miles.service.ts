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

  // getMiles():Observable<IMiles[]>{
  //   return this.http.get(this.apiBase + 'api/miles')
  //   .map((response: Response) =>
  //   {
  //     return <IMiles[]>response.json()
  //   }).catch(this.handleError);
  // }

  getMiles(){
    return MILES;
  }

  // getMiles(){
  //   this.db.list('/miles').valueChanges().subscribe(miles => {
  //     console.log(miles);
  //     return miles;
  //   });
  // }
  
  // saveMile(mile): Observable<IMiles>{
  //   let headers = new Headers({ 'Content-Type': 'application/json'});
  //   let options = new RequestOptions({headers: headers});

  //   return this.http.post(this.apiBase + 'api/miles', JSON.stringify(mile), options)
  //   .map((response: Response) => 
  //   {
  //     return response.json();
  //   }).catch(this.handleError);
  // }

  saveMile(mile){
    MILES.push(mile);
  }
  // updateMile(mile): Observable<IMiles>{
  //   let headers = new Headers({ 'Content-Type': 'application/json'});
  //   let options = new RequestOptions({headers: headers});
  //   return this.http.put(this.apiBase + 'api/miles/' + mile.id, JSON.stringify(mile), options)
  //   .map((response: Response) => 
  //   {
  //     return response.json();
  //   }).catch(this.handleError);
  // }

  updateMile(mile){
    MILES.forEach(function(updateMile){
      if(updateMile.id = mile.id){
        updateMile = mile;
      }
    })
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

  //   getMileById(id: number):Observable<IMiles>{
  //     return this.http.get(this.apiBase + 'api/miles/' + id)
  //     .map((response: Response) =>
  //     {
  //       return <IMiles>response.json();
  //     }).catch(this.handleError)
  // }

  getMileById(id: number){
    MILES.forEach(function(mile){
      if(mile.id == id) return mile;
    });
  }
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
  getMilesByDate(sortValues: ISortValues){
    var miles: IMiles[];
    //console.log(this.miles);
    //return null;

    if (sortValues.month == "" && sortValues.year == "") return MILES;

    else
    return miles = MILES.filter(function(mile){
      if (sortValues.month != "" && sortValues.year != "")
        return (mile.date.match(sortValues.year) && mile.date.match(sortValues.month));
      else if (sortValues.month !="")
        return mile.date.match(sortValues.month)
      else if (sortValues.year != "")
        return mile.date.match(sortValues.year)
    })
    
  }

}
const MILES: IMiles[] = [
    {
      id: 1,
      miles: 45,
      date: new Date('1/21/2017').toDateString(),
      note: 'Today is my Birthday!',
      reimbursed: true,
    },

    {
      id: 2,
      miles: 35,
      date: new Date('2/1/2017').toDateString(),
      note: 'Snowy drive...',
      reimbursed: true,
    },

    {
      id: 3,
      miles: 30,
      date: new Date('2/14/2017').toDateString(),
      note: 'Cupid day',
      reimbursed: false,
    },
    {
      id: 4,
      miles: 27,
      date: new Date('6/20/2018').toDateString(),
      note: 'Good drive in',
      reimbursed: false,
    },
    {
      id: 5,
      miles: 25,
      date: new Date('8/30/2018').toDateString(),
      note: 'Road closed',
      reimbursed: false,
    }

  ]