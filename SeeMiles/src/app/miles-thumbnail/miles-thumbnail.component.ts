import { Component, Input, OnInit } from '@angular/core';
import { IMiles } from "../miles/shared/miles.model";

@Component({
  selector: 'miles-thumbnail',
  templateUrl: './miles-thumbnail.component.html',
  styleUrls: ['./miles-thumbnail.component.css']
})
export class MilesThumbnailComponent{

  @Input() mile: IMiles
      getMileSeverityClass(){
        if (this.mile.miles < 25)
          return ['green', 'bold']
        else if (this.mile.miles < 35)
          return ['yellow', 'bold']
        else
          return ['red', 'bold']
    }
}
