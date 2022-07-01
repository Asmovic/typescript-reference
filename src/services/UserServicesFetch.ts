import axios from 'axios';

export class UserService {
    private static serviceURL: string = 'https://jsonplaceholder.typicode.com'

    public static getAllUsers(){
        let dataURL:string = `${this.serviceURL}/users`;
        return axios.get(dataURL);
    }

    public static getUser(userId:string) {
        let dataURL:string = `${this.serviceURL}/users/${userId}`;
        return axios.get(dataURL);
    }
}