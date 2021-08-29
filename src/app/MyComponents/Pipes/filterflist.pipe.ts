import { Pipe, PipeTransform } from '@angular/core';
import { Fees } from '../shared/Fees.model';
import { StudentsModel } from '../shared/student.model';

@Pipe({
  name: 'filterflist'
})
export class FilterflistPipe implements PipeTransform {

  transform(fees: Fees[], searchValue: any): Fees[] {
    if(!fees || !searchValue) {
      return fees;
    }
    return fees.filter(fees =>
       fees.studentName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
