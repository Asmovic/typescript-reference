import { IUser2 } from "../models/IUser2";

export class UserService {
    private static users: IUser2[] = [
        {
            sno: 'AA1934',
            name: 'Ibrahim',
            age: 27,
            designation: 'Software Engineer',
            company: 'Brainwavee'
        },
        {
            sno: 'AA1294',
            name: 'Kingsley',
            age: 25,
            designation: 'Database Architect',
            company: 'Google'
        },
        {
            sno: 'AA6587',
            name: 'Moyeni',
            age: 28,
            designation: 'Cloud Engineer',
            company: 'Uber'
        }
    ];

    public static getAllUsers() {
        return this.users;
    }
}