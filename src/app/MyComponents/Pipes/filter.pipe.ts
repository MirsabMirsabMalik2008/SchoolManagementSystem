import { Pipe, PipeTransform } from '@angular/core';
import { StudentsModel } from '../shared/student.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: StudentsModel[], searchValue: any): StudentsModel[] {
    if(!students || !searchValue) {
      return students;
    }
    return students.filter(students =>
       students.StudentName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
