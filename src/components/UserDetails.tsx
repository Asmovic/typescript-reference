import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IUser3 } from '../models/IUser3';
import { UserService } from '../services/UserServicesFetch';

interface IProps{};
interface IState{
    loading: boolean;
    user: IUser3;
    errorMessage: string;
};
interface URLParams{
    id: string;
};

let UserDetails:FC<IProps> = () => {
    let { id } = useParams<URLParams | any>();
    let [state, setState] = useState<IState>({
        loading: false,
        errorMessage: '',
        user: {} as IUser3
    });
    useEffect(()=>{
      id && UserService.getUser(id).then(res=>{
        setState({
            ...state, loading: false, errorMessage: '',
            user: res.data
        })
      }).catch((err)=>{
        setState({
            ...state, loading: false, errorMessage: err.message
        })
      })
    }, [id]);
    let { loading, user, errorMessage } = state;
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">
                            User Details
                        </p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi iste officiis ipsam pariatur facere? Alias eligendi blanditiis atque maiores.</p>
                    </div>
                </div>
                {
                    Object.keys(user).length > 0 &&
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name: <span className="fw-bold">{user.name}</span>
                                </li>
                                <li className="list-group-item">
                                    Phone: <span className="fw-bold">{user.phone}</span>
                                </li>
                                <li className="list-group-item">
                                    Email: <span className="fw-bold">{user.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Company: <span className="fw-bold">{user.company.name}</span>
                                </li>
                                <li className="list-group-item">
                                    City: <span className="fw-bold">{user.address.city}</span>
                                </li>
                                <li className="list-group-item">
                                    Zip code: <span className="fw-bold">{user.address.zipcode}</span>
                                </li>
                            </ul>
                        </div>
                </div>
                }
                <div className="row">
                    <div className="col"><Link to={'/'} className="btn btn-success mt-3">Back</Link></div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default UserDetails;