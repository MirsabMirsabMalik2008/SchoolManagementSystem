export class StudentsModel {
    id?: number = 0;
    StudentName: string = '';
    Class: string = '';
    MobileNumber: number = 0;
    Address: string = '';
    Gender: string = '';
    AdmissionDate: Date | undefined;
    DateOfBirth: Date | undefined;
    File: string = '';
    Fees: number = 0;
}