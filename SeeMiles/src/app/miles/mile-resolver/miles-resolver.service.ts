import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MilesService } from '../shared/miles.service'
@Injectable()
export class MilesResolver {
  
  constructor(private _milesService: MilesService) { }

  resolve(){
    return this._milesService.getMiles();
  }
}
