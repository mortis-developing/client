import '../assets/css/SideBarMenu.css';

import * as React from 'react';

// COMPONENTS
import ItemProjectComponent from "./menu-components/itemProjectComponent";

import darkLogo from '../assets/images/dark/menu/logo.svg';
import lightLogo from '../assets/images/light/menu/logo.svg';

class SideBarMenu extends React.Component {

    componentDidMount() {

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
                    <ItemProjectComponent />
                    <ItemProjectComponent />
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