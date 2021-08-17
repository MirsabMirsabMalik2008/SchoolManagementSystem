export class StudentsModel {
    id?: number = 0;
    studentName: string = '';
    class: number = 0;
    mobileNumber: number = 0;
    address: string = '';
    gender: string = '';
    admissionDate: Date | undefined;
    dateOfBirth: Date | undefined;
    file: string = '';
    fees: number = 0;
}