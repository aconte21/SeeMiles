import { ISortValues } from './shared/sort-values.model';

import { IMiles } from './shared/miles.model';
import { Component, OnInit } from '@angular/core';
import { MilesService } from "./shared/miles.service";

import { ActivatedRoute } from '@angular/router';
import { ISettings } from "../mile-settings/mile-settings.model";
@Component({
  selector: 'miles-list',
  templateUrl: './miles.component.html',
  styleUrls: ['./shared/all-page.css']
})
export class MilesComponent implements OnInit {
  miles: IMiles[];
  mileDetail: IMiles;
  mileDetailSettings: ISettings;
  settings: ISettings;
  showDetails: Boolean = false;
  
  constructor(private _milesService: MilesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.miles = this.route.snapshot.data['miles'];
    this.settings = this.route.snapshot.data['settings']
  }

  getMileDetail(mileDetails){
    this.mileDetail = mileDetails.IMiles;
    this.mileDetailSettings = mileDetails.ISettings;
    this.showDetails = !this.showDetails;
  }

  sortMilesByDate(sortValues: ISortValues){
    this.miles = this._milesService.getMilesByDate(sortValues)
  }
}
