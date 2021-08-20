export class StudentsModel {
    id?: number = 0;
    studentName: string = '';
    class: string = '';
    mobileNumber: number = 0;
    address: string = '';
    gender: string = '';
    admissionDate: Date | undefined;
    dateOfBirth: Date | undefined;
    file: string = '';
    fees: number = 0;
}