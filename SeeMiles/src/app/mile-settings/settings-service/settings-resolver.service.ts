import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SettingsService } from './settings.service';
@Injectable()
export class SettingsResolver implements Resolve<any> {
  constructor(private _settingsService: SettingsService) { }
  private userId: number = 1;
  resolve(route: ActivatedRouteSnapshot){
    return this._settingsService.getUserSettings(this.userId);
  }
 /*
  USE THIS WHEN USER PROFILES ARE IMPLEMENTED
    resolve(route: ActivatedRouteSnapshot){
    return this._settingsService.getUserSettings(route.params['id']);
  }*/
}
