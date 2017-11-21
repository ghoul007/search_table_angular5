import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";
@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  transform(array: any[], args?: any): any {
    if (args) {
      return _.filter(array, val => val.title.indexOf(args) > -1);
    }
    return array;
  }
}
