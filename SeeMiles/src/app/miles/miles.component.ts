import { ISortValues } from './shared/sort-values.model';

import { IMiles } from './shared/miles.model';
import { Component, OnInit } from '@angular/core';
import { MilesService } from "./shared/miles.service";
@Component({
  selector: 'miles-list',
  templateUrl: './miles.component.html',
  styleUrls: ['./shared/all-page.css']
})
export class MilesComponent implements OnInit {
  miles: IMiles[];
  constructor(private _milesService: MilesService) { }

  ngOnInit() {
    this.miles = this._milesService.getMiles();
  }

  sortMilesByDate(sortValues: ISortValues){
    this.miles = this._milesService.getMilesByDate(sortValues);
  }
}
