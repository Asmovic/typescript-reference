import React, { FC, useState } from 'react';
import { IUser } from '../models/IUser';

interface IProps{};
interface IState{
    user: IUser
};

let LoginForm:FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        user: {
            username: '',
            password: ''
        }
    });
    let handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        let { name, value } = event.target;
        setState({ user: {
            ...state.user,
            [name]: value
        }})
    };

    let login = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(state.user);

    }
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={login}>
                                    <div className="mb-2">
                                        <input type="text" onChange={(ev)=>handleChange(ev)} name="username" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="password" onChange={(ev)=>handleChange(ev)} name="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LoginForm;