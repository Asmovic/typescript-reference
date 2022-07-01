import React, { FC, useState } from 'react';

interface IProps{};
interface IState{
    name: string;
    age: number;
    title: string;
};

let EmployeeComponent:FC<IProps> = () => { 
    let [state, setState] = useState<IState>({
        name: 'Ibrahim',
        age: 27,
        title: 'Software Engineer'
    });
    return (
        <React.Fragment>
            <h3>Component</h3>
        </React.Fragment>
    )
};

export default EmployeeComponent;