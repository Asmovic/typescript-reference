import React, { FC, useState, useEffect } from 'react';
import { IUser3 } from '../models/IUser3';
import { UserService } from '../services/UserServicesFetch';

interface IProps{};
interface IState{
    loading: boolean;
    users: IUser3[];
    errorMessage: string;
};

let FetchUser:FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUser3[],
        errorMessage: ''
    });

useEffect(()=>{
    setState({...state, loading: true})
    UserService.getAllUsers().then(res => setState({
            ...state, users: res.data,
            loading: false,
            errorMessage: ''
    }))
    .catch((err)=>{
        setState({
            ...state,
            loading: false,
            errorMessage: err.message
    })
    })
}, []);
    let { users, loading, errorMessage } = state;
    return (
        <React.Fragment>
            <h3>FetchUser</h3>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center text-hover">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 && users.map(user=>{
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default FetchUser;