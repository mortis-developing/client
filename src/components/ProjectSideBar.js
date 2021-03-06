import '../assets/css/ProjectSideBar.css';

import UpdateComponent from "./project-components/UpdateComponent";

import * as React from 'react';
import Axios from 'axios';

import variables from "../config/variables";

class ProjectSideBar extends React.Component {

    constructor(props) {
        super(props);

        this.follow = this.follow.bind(this);
    }

    componentDidMount() {
        variables.isLoading = false;
    }

    follow() {
        console.log('FOLLOW > (current id)');
        variables.currentProject.forEach((row) => {
            console.log(row.data.results);
        });
    }

    render() {
        return (
            <div className="info-block">
                <div className="head">
                    <img src='/images/static/ProjectBanner.jpg' alt="error" />
                    <div className="head-content">
                        <div className="top">
                            <div className="head-content-top">
                                <h3>Waven</h3>
                                <p>Ankama</p>
                            </div>
                            <div className="head-content-actions">
                                <input className="pagesettings" type="submit" onClick={this.follow} value="Follow" />
                            </div>
                        </div>
                        <p className="info-text">The World of Twelve needs all the Heroes. Get ready to join the tactical online adventure...</p>
                        <div className="platforms">
                            <span className="material-icons">android</span>
                            <span className="material-icons">android</span>
                            <span className="material-icons">android</span>
                        </div>
                    </div>
                </div>

                <div className="action-section">
                    <div className="left">
                        <div className="action active">Updates</div>
                        <div className="action">Author(s)</div>
                        <div className="action">Downloads</div>
                    </div>
                    <div className="right">
                        <span className="material-icons">read_more</span>
                    </div>
                </div>

                <div className="update-section">
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                    <UpdateComponent />
                </div>

            </div>
        );
    }

}

export default ProjectSideBar;