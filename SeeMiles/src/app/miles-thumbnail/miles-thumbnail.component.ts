import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IMiles } from "../miles/shared/miles.model";
import { ISettings } from "../mile-settings/mile-settings.model";
import { MilesService } from "../miles/shared/miles.service";
import { Router } from "@angular/router";

@Component({
  selector: 'miles-thumbnail',
  templateUrl: './miles-thumbnail.component.html',
  styleUrls: ['./miles-thumbnail.component.css']
})
export class MilesThumbnailComponent{
  @Input() mile: IMiles
  @Input() settings: ISettings
  @Output() getDateHeader = new EventEmitter();
  @Output() getMileDetails = new EventEmitter();

  constructor(private _milesService: MilesService, private route: Router){}

  getHeader(date: string){
    this.getDateHeader.emit(date);
  }
  getDetails(){
    this.getMileDetails.emit({IMiles:this.mile, ISettings:this.settings});
  }
  getReimbursableMiles(){
    return this.mile.miles - this.settings.milesToOffice
  }
  getReimbursableMilePercentage(): number{
    var milesReimbursed = this.getReimbursableMiles()
    var totalMilesDriven = this.mile.miles

    var percentReimbursed = (milesReimbursed / totalMilesDriven) * 100

    return percentReimbursed
  }
  getAmountReimbursed(): number{
    var amount: number = this.settings.moneyPerMile * this.getReimbursableMiles()

    if (amount > 0) return this.settings.moneyPerMile * this.getReimbursableMiles()
    else return 0
  }

  editMile(){
    console.log("Editing mile: " + this.mile.id)
  }


  getMileSeverityClass(){
    var margin = this.getReimbursableMilePercentage()
    if (margin >= 55)
      return ['best', 'bold']
    else if (margin >= 35)
      return ['high', 'bold']
    else if (margin >= 10)
      return ['mid', 'bold']
    else
      return ['last', 'bold']
}
}
