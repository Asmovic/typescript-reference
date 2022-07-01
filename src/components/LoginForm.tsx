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
        setState({nuser: {
            [name]: value
        }})
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-2">
                                        <input type="text" name="username" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="password" name="password" className="form-control" placeholder="Password" />
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