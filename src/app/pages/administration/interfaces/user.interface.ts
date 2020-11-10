export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    email: string;
    isDisable: boolean;
    role: {

    };
    securityQuestions: {

    };
    date_created: Date;
    date_modified: Date;
    role: string;    
}