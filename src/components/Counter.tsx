import React, { FC, useState } from 'react';

interface IProps{};
interface IState{
   counter: number;
};

let Counter:FC<IProps> = () => { 
    let [state, setState] = useState<IState>({
        counter: 0,
        
    });
    let handleInc = () => setState({ ...state, counter: state.counter + 1});
    let handleDec = () => setState({ ...state, counter: state.counter - 1});
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h4 display-3">Count</p>
                                <button className="btn btn-success m-1" onClick={handleInc}>INCR</button>
                                <button className="btn btn-danger m-1" onClick={handleDec}>DECR</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {state.counter}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Counter;