import { Component, OnInit } from '@angular/core';
import { VehiculeService, Statusload } from '../vehicule.service';
import { Spinkit } from 'ng-http-loader/spinkits';

declare var $ : any;

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  vehicules : any= [];
  searchLoader: boolean;

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(private _vehiculeService: VehiculeService) {

  }

  ngOnInit() {
    this._vehiculeService.element.subscribe(
      (res) =>     {
        this.searchLoader=  (res.loader==Statusload.on);
        this.vehicules = res.vehicules;
      },
      err =>     {  console.log('err',err);},
      () =>      {   console.log('complete')}

    )
  }

  public toInt(num: string) {
    return +num;
}

public sortByWordLength = (a: any) => {
    return a.city.length;
}

}
