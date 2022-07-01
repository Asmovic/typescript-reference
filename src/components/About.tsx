import React, { FC, useState } from 'react';

interface IProps{};
interface IState{};

let About:FC<IProps> = () => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">About Us</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda laudantium alias ullam numquam nesciunt aliquid, expedita qui iure, ipsa maiores dolore quis ipsum magnam asperiores aperiam error nobis.</p>
                    </div>
                </div>
                <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    App Name: <span className="fw-bold">Type Script Test</span>
                                </li>
                                <li className="list-group-item">
                                    Author: <span className="fw-bold">Asmovic &copy;{` ${new Date().getFullYear()}`}</span>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default About;