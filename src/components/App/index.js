import React, { Component } from 'react';
import { Toolbar } from "react-md"
import Shots from '../Shots'

import './App.scss';
import '../../assets/scss/font-awesome.scss'
import images from '../../assets/images'

class App extends Component {
    render() {
        return (
            <div>
                <Toolbar
                    colored
                    title="Teste">
                </Toolbar>

                <Shots data={images}/>
            </div>
        );
    }
}

export default App;
