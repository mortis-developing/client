import '../assets/css/SideBarMenu.css';

import * as React from 'react';

// COMPONENTS
import ItemProjectComponent from "./menu-components/itemProjectComponent";

import darkLogo from '../assets/images/dark/menu/logo.svg';
import lightLogo from '../assets/images/light/menu/logo.svg';
import Axios from "axios";

class SideBarMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: '',
            projects_length: 0,
            projects_array: []
        };

        this.getProjectList();
    }

    componentDidMount() {
        const loop = this.state.projects_array.map((row) => {
            return(<ItemProjectComponent />);
        });
    }

    getProjectList() {
        Axios.get("http://192.168.2.106:8080/login").then((response) => {
            response.data.user.forEach(row => this.state.projects = row.projects);

            this.state.projects_length = this.state.projects.split(',').length;
            this.state.projects.split(',').forEach(row => this.state.projects_array.push(row));
            console.log(this.state.projects_array);
        });
    }

    render() {
        return (
            <div className="nav">
                <div className="item top">
                    <div className="item-icon" id="item-top">
                        <picture>
                            <source srcSet={lightLogo} media="(prefers-color-scheme: light)"/>
                            <img src={darkLogo} alt="error" />
                        </picture>
                    </div>
                    <div className="action"><span className="material-icons">keyboard_arrow_down</span></div>
                </div>
                <hr />
                <div className="item search">
                    <div className="item-icon">
                        <span className="material-icons">search</span>
                    </div>
                </div>
                <div className="item newpost">
                    <div className="item-icon">
                        <span className="material-icons">post_add</span>
                    </div>
                </div>
                <hr />
                <div className="center">

                    <ItemProjectComponent />

                    <div className="item add">
                        <div className="item-icon">
                            <span className="material-icons">add</span>
                        </div>
                    </div>

                </div>
                <div className="item bottom">
                    <div className="item-icon">
                        <span className="material-icons">settings</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default SideBarMenu;