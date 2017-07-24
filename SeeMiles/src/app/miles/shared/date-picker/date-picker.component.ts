import { ISortValues } from '../sort-values.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit{
  @Output() sortMiles = new EventEmitter();

  sortMilesForm: FormGroup;

  month: FormControl;
  year: FormControl;

  ngOnInit(){
    this.month = new FormControl('');
    this.year = new FormControl('');

    this.sortMilesForm = new FormGroup({
      month: this.month,
      year: this.year
    })
  }
  sortByDate(formValues){
    let sortValues: ISortValues={
      month: formValues.month,
      year: formValues.year
    }
    this.sortMiles.emit(sortValues);
  }

}
