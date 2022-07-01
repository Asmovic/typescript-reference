import React, { Component } from 'react';

interface IProps{};
interface IState{
    name: string;
    age: number;
    title: string;
};

class EmployeeClassComponent extends Component<IProps,IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            name: 'Ibrahim',
            age: 27,
            title: 'Software Engineer'
        } as IState;
    }

    render(){
        const { name, age, title } = this.state;
        return (
            <>
                <h3>Employee Class Component </h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        NAME: {name}
                    </li>
                    <li className="list-group-item">
                        AGE: {age}
                    </li>
                    <li className="list-group-item">
                        TITLE: {title}
                    </li>
                </ul>
            </>
        )
    }
}

export default EmployeeClassComponent;