import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MilesService } from "../../shared/miles.service";

@Injectable()
export class DetailsResolver implements Resolve<any> {
  constructor(private _milesService: MilesService) { }

  resolve(route: ActivatedRouteSnapshot){
    return this._milesService.getMileById(route.params['id']);
  }

}
