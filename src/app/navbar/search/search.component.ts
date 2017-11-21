import { Component, OnInit } from "@angular/core";
import { VehiculeService } from "../../vehicule.service";
import * as moment from 'moment';
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  public daterange: any = {};
  ngOnInit(): void {
  }
  
  constructor(private _vehiculeService: VehiculeService) {
    let now = moment();
    this.daterange.start =now;
    this.daterange.end =now;
  }

  
      // see original project for full list of options
      // can also be setup using the config service to apply to multiple pickers
      public options: any = {
          locale: { format: 'DD-MM-YYYY' },
          alwaysShowCalendars: false,
          startDate :moment(),
          endDate :moment()
      };
  
      public selectedDate(value: any, datepicker?: any) {
          // this is the date the iser selected
          console.log(value);
  
          // any object can be passed to the selected event and it will be passed back here
          datepicker.start = value.start;
          datepicker.end = value.end;
  
          // or manupulat your own internal property
          this.daterange.start = value.start;
          this.daterange.end = value.end;
          this.daterange.label = value.label;
      }
      
    //   public updateDateRange() {
    //     this.picker.datePicker.setStartDate('2017-03-27');
    //     this.picker.datePicker.setEndDate('2017-04-08');
    // }

  getVehicule(val) {
    console.log(this.daterange.start.format('MM/DD/YYYY'),this.daterange.end.format('MM/DD/YYYY'),val);
    this._vehiculeService.getVehicule() ;

  }
}
