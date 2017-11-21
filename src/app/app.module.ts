import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VehiculeService } from './vehicule.service';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { DataTableModule} from "angular2-datatable";
import { NavComponent } from './navbar/nav/nav.component';
import { SearchComponent } from './navbar/search/search.component';
import { LoaderComponent } from './navbar/loader/loader.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DataFilterPipe } from './data-filter.pipe';
import {FormsModule} from '@angular/forms';
const ROOT = [
  {
    path: "",
    redirectTo: "vehicule",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehicule",
    component: VehiculeComponent
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, VehiculeComponent, NavComponent, SearchComponent, LoaderComponent, DataFilterPipe],
  imports: [ BrowserModule, RouterModule.forRoot(ROOT), HttpModule, DataTableModule, Daterangepicker , FormsModule   ],
  providers: [VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
