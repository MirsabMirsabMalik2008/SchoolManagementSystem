import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: any) {
    if(value.length === 0 || filteredString === '') {
      return value;
    }
    const Filter = [];
    for(const s of value) {
      if(s['name'] === filteredString) {
        Filter.push(s);
      }
    }
    return Filter;
  }
}
