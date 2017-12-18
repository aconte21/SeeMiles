import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() month: String
  constructor() { }

  ngOnInit() {

  }

}
