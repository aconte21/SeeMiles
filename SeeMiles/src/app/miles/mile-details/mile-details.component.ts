import { Component, OnInit, Input } from '@angular/core';
import { IMiles } from "../shared/miles.model";
import { ISettings } from "../../mile-settings/mile-settings.model";
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MilesService } from "../shared/miles.service";
@Component({
  selector: 'mile-details',
  templateUrl: './mile-details.component.html',
  styleUrls: ['../shared/all-page.css']
})
export class MileDetailsComponent implements OnInit {
  @Input() mile: IMiles;
  @Input() settings: ISettings;
  constructor(private router:Router, private route:ActivatedRoute, private _milesService: MilesService) { }

  ngOnInit() {
    
    this.mile = this.route.snapshot.data['details'];
  }

  updateMile(formValues){
    if(!formValues.miles) formValues.miles = this.mile.miles
    if(!formValues.date) formValues.date = this.mile.date
    if(!formValues.route) formValues.route = this.mile.note
    formValues.id = this.mile.id
    this._milesService.updateMile(formValues)
    .subscribe(mile => {
      this.back();
    })
  }
  deleteMile(){
    if(confirm("Are you sure you want to delete this mile?")){
      this._milesService.deleteMile(this.mile).subscribe(mile =>{
        this.back();
      })    
    }
  }
  back(){
    this.router.navigate(['miles'])
  }
  
}
