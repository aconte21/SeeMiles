import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mile-settings',
  templateUrl: './mile-settings.component.html',
  styleUrls: ['../miles/shared/all-page.css']
})
export class MileSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['miles/']);
  }

}
