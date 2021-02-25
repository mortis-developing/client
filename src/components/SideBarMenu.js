import '../assets/css/SideBarMenu.css';

import React, {useState} from 'react';

// COMPONENTS
import ProjectHolderComponent from "./menu-components/ProjectHolderComponent";
import ItemProjectComponent from './menu-components/itemProjectComponent';

// IMAGES
import Axios from "axios";

class SideBarMenu extends React.Component {

    constructor(props) {
        super(props);

        Axios.defaults.withCredentials = true;
    }

    render() {
        return (
            <div className="nav">
                <div className="item top">
                    <div className="item-icon" id="item-top">
                        <picture>
                            <source srcSet='/images/light/menu/logo.svg' media="(prefers-color-scheme: light)"/>
                            <img src='/images/dark/menu/logo.svg' alt="error" />
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

                    <ProjectHolderComponent />

                    <div className="item hidden">
                        <div className="item-icon-error expand" data-title="Error">
                            <span className="material-icons">priority_high</span>
                        </div>
                    </div>
                    
                    <div className="item add">
                        <div className="item-icon-add">
                            <span className="material-icons">add</span>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="item bottom">
                    <hr />
                    <div className="item-icon">
                        <span className="material-icons">settings</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default SideBarMenu;