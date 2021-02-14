import React from 'react';

import thumbnail from '../../assets/images/static/thumbnail.png';

import Axios from "axios";

Axios.defaults.withCredentials = true;

class itemProjectComponent extends React.Component {

    constructor(props) {
        super(props);
        Axios.defaults.withCredentials = true;
    }

    handleClick = id => () => {
        Axios.get("http://192.168.2.106:8080/projects/" + id).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className="item project">
                <div className="item-icon" onClick={this.handleClick(1)}>
                    <img src={ thumbnail } alt="project-banner" />
                </div>
            </div>
        );
    }
}

export default itemProjectComponent;