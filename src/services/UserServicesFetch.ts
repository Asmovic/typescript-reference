import axios from 'axios';

export class UserService {
    private static serviceURL: string = 'https://jsonplaceholder.typicode.com'

    public static getAllUsers(){
        let dataURL:string = `${this.serviceURL}/users`;
        return axios.get(dataURL);
    }
}