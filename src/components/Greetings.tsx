import React, { FC, useState } from 'react';

interface IProps{};
interface IState{
    message: string;
};

let Greetings:FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        message: 'Hello'
    });

    let handleGreet = (greet:string):void =>{
        return setState({ ...state, message: greet });
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">{state.message}</p>
                                <button className="btn btn-success m-1" onClick={()=>handleGreet('Good Morning')}>Good Morning</button>
                                <button className="btn btn-warning m-1" onClick={()=>handleGreet('Good Afternoon')}>Good Afternoon</button>
                                <button className="btn btn-danger m-1" onClick={()=>handleGreet('Good Evening')}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Greetings;