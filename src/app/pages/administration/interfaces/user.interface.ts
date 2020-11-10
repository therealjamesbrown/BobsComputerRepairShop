import { SecurityQuestion } from '../interfaces/security-question.interface
import { Role } from '../interfaces/role.interface'

export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    email: string;
    isDisable: boolean;
    role: [Role];
    securityQuestions: [SecurityQuestion];
    date_created: Date;
    date_modified: Date; 
}