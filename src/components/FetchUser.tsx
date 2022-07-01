import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 fw-bold text-success">
                            User List
                        </p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio possimus magni delectus aperiam facilis perspiciatis consequuntur natus maiores, incidunt, dolorem repellat blanditiis pariatur, cupiditate eaque nesciunt ipsam distinctio neque.</p>
                    </div>
                </div>
            </div>
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
                                            <td><Link to={`/contacts/${user.id}`}>{user.name}</Link></td>
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