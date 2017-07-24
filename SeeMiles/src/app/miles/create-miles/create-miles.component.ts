import { Router } from '@angular/router';
import { IMiles } from '../shared/miles.model';
import { Component, OnInit } from '@angular/core';
import { MilesService } from "../shared/miles.service";

@Component({
  templateUrl: './create-miles.component.html',
  styleUrls: ['../shared/all-page.css']
})
export class CreateMilesComponent implements OnInit {
  mile: IMiles
  constructor(private route:Router, private milesService: MilesService) { }

  ngOnInit() {
  }
  createNewMile(mile){
    this.milesService.createNewMile(mile)
    this.back();
  }
  back(){
    this.route.navigate(['miles'])
  }
}
