import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable, Subject, ReplaySubject } from "rxjs/Rx";
 

@Injectable()
export class VehiculeService {
  private globalVeh: Subject<any> = new ReplaySubject();
  element: Observable<any>;

  constructor(private _http: Http) {
    console.log("this.element", this.element);
    this.element = this.globalVeh.asObservable();
  }

  setVehicule(val) {
    this.globalVeh.next(val);
  }

  getElement() {
    return this.element;
  }

  getVehicule() {
    this.globalVeh.next({vehicules: [], loader:  Statusload.on});
    this._http
      .get("https://jsonplaceholder.typicode.com/photos")
      .map(res => res.json())
      .subscribe(res => {
        this.globalVeh.next({vehicules: res, loader:  Statusload.off});
        //     // $('#example').DataTable();
      });
  }
}

export const  enum Statusload {
  on,
  off
}
