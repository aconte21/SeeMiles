import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ISettings } from "./mile-settings.model";
import { SettingsService } from "./settings-service/settings.service";

@Component({
  selector: 'app-mile-settings',
  templateUrl: './mile-settings.component.html',
  styleUrls: ['../miles/shared/all-page.css']
})
export class MileSettingsComponent implements OnInit {

  settings: ISettings;
  constructor(private router: Router, 
  private _settingsService: SettingsService, private route: ActivatedRoute) { }

//TODO change '1' to whatever id is tied to the user in the future
  ngOnInit() {
    this.settings = this.route.snapshot.data['settings'];
  }

  saveSettings(formValues){
    if(!formValues.milesToOffice) formValues.milesToOffice = this.settings.milesToOffice
    if(!formValues.moneyPerMile) formValues.moneyPerMile = this.settings.moneyPerMile
    formValues.id = 1;
    this._settingsService.saveUserSettings(formValues)
    .subscribe(setting => {
      this.back();
    })
  }
  back(){
    this.router.navigate(['miles/']);
  }

}
