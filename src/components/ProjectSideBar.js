import '../assets/css/ProjectSideBar.css';

import ProjectBanner from '../assets/images/static/ProjectBanner.jpg';
import UpdateComponent from "./project-components/UpdateComponent";

import * as React from 'react';

class ProjectSideBar extends React.Component {

    render() {
        return (
            <div className="info-block">
                <div className="head">
                    <img src={ ProjectBanner } alt="error" />
                    <div className="head-content">
                        <div className="top">
                            <div className="head-content-top">
                                <h3>Waven</h3>
                                <p>Ankama</p>
                            </div>
                            <div className="head-content-actions">
                                <input className="pagesettings" type="submit" value="Follow" />
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
                </div>

            </div>
        );
    }

}

export default ProjectSideBar;