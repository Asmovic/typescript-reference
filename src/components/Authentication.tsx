import { stat } from 'fs/promises';
import React, { FC, useState } from 'react';

interface IProps{};
interface IState{
    active: boolean;
};

let Authentication:FC<IProps> = () => {
    const [state, setState] = useState<IState>({active: false});

    let renderContent = () => { 
        return state.active ? (
        <div>
            <p className="h3 text-success">Welcome User!!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam, eos impedit id, in, qui perferendis doloribus doloremque aliquid officiis expedita aspernatur necessitatibus adipisci officia provident voluptatibus voluptates fuga eveniet.</p>
        </div>
        ) : ( <div>
            <p className="h3 text-primary">Thank You!!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quas. Consequatur, pariatur itaque. Cupiditate officiis molestias consequuntur ab minima totam ullam cumque quidem quos, nulla, accusamus a et!</p>
        </div> )
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        {renderContent()}
                    </div>
                    <div className="row">
                        <div className="col">
                            { !state.active ? <button onClick={()=> setState({...state, active: true })} className="btn btn-success m-1">Login</button> :
                            <button onClick={()=> setState({...state, active: false })} className="btn btn-warning m-1">Logout</button> }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Authentication;