import { ISortValues } from './sort-values.model';
import { IMiles } from './miles.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MilesService {
  constructor() { }
  getMiles(){
    return MILES
  }
  getMilesByDate(sortValues:ISortValues){
    var miles: IMiles[];

    if (sortValues.month == "" && sortValues.year == "") return MILES

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
  createNewMile(mile){
    mile.date = new Date('1/21/95').toDateString()
    MILES.push(mile)
  }
}
  const MILES: IMiles[] = [
    {
      miles: 21,
      date: new Date('1/21/2017').toDateString(),
      route: "www.conte.com"
    },
        {
      miles: 43,
      date: new Date('6/11/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 14,
      date: new Date('6/12/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 54,
      date: new Date('6/13/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 22,
      date: new Date('7/14/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 31,
      date: new Date('7/15/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 24,
      date: new Date('7/16/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 28,
      date: new Date('7/17/2017').toDateString(),
      route: "maps.google.com"
    },
     {
      miles: 24,
      date: new Date('6/10/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 43,
      date: new Date('6/11/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 14,
      date: new Date('6/12/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 54,
      date: new Date('6/13/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 22,
      date: new Date('7/14/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 31,
      date: new Date('7/15/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 24,
      date: new Date('7/16/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 28,
      date: new Date('7/17/2017').toDateString(),
      route: "maps.google.com"
    },
     {
      miles: 24,
      date: new Date('6/10/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 43,
      date: new Date('6/11/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 14,
      date: new Date('6/12/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 54,
      date: new Date('6/13/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 22,
      date: new Date('7/14/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 31,
      date: new Date('7/15/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 24,
      date: new Date('7/16/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 28,
      date: new Date('7/17/2017').toDateString(),
      route: "maps.google.com"
    },
     {
      miles: 24,
      date: new Date('6/10/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 43,
      date: new Date('6/11/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 14,
      date: new Date('6/12/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 54,
      date: new Date('6/13/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 22,
      date: new Date('7/14/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 31,
      date: new Date('7/15/2017').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 24,
      date: new Date('7/16/2016').toDateString(),
      route: "maps.google.com"
    },
        {
      miles: 28,
      date: new Date('7/17/2017').toDateString(),
      route: "maps.google.com"
    }
  ]
