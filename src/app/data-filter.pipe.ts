import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";
@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  transform(array: any[], args?: any): any {
    if (args) {
      return _.filter(array, val => {
        return val.id.toString().indexOf(args.id) > -1 &&
          val.title.indexOf(args.title) > -1 &&
          val.url.indexOf(args.url) > -1;
      });
    }
    return array;
  }
}
