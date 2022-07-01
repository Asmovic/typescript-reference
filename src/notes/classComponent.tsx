import React, { Component } from 'react';

interface IProps{};
interface IState{};

class ClassComp extends Component<IProps,IState> {
    constructor(props: IProps){
        super(props);
        this.state = {} as IState;
    }

    render(){
        return (
            <div>Class Component</div>
        )
    }
}

export default ClassComp;