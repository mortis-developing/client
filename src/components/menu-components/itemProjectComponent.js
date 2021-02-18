import React, { useEffect } from 'react';

import Axios from "axios";
import variables from '../../config/variables';

// ENABLE CREDENTIALS FOR AXIOS REQUESTS (XMLHTTPREQUEST)
Axios.defaults.withCredentials = true;

class itemProjectComponent extends React.Component {

    state = {};

    constructor(props) {
        super(props);

        Axios.defaults.withCredentials = true;

        // PROJECTS_IMAGES = ARRAY WITHE THE SRC TO THE PROJECT IMAGES
        // PROJECTS_ARRAY = ARRAY WITH THE ID'S OF THE PROJECTS IN THE LIST OF THE USER.
        this.state = {
            userID: 0,
            projects: [],
            items: [],
        };
    }

    // SEND GET REQUEST WHEN ICON IS CLICKED.
    handleClick = id => () => {
        Axios.get("http://192.168.2.100:8080/projects/get/" + id).then((response) => {
            variables.currentProject.length = 0;
            variables.currentProject.push(response);
        });
        console.log(variables.currentProject);
    }

    componentDidMount() {
        // SEND REQUEST TO /LOGIN SERVER
        Axios.get('http://192.168.2.100:8080/login').then((response) => {

            response.data.user.forEach((row) => {
                // SAVE THE CURRENT USER ID;
                this.state.userID = row.id;
            });

            // LOAD PROJECTS
            Axios.get('http://192.168.2.100:8080/users/list/' + this.state.userID).then((response) => {
                response.data.forEach((row) => {
                    this.setState({projects: this.state.projects.concat(row)});
                })
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    render() {
        //../../assets/images/static/thumbnail.png
        // ARRAY WITH ALL THE PROJECTS WERE ARE IN THE LIST OF THE USER AS OBJECT.

        const items = [];

        for (const [index, value] of this.state.projects.entries()) {
            items.push(
                <div className="item project" key={index}>
                    <div className="item-icon expand" id="list-item" data-title={value.project_name} onClick={this.handleClick(value.id)}>
                        <img src={`/images/static/${value.image}`} alt="thumbnail" />
                    </div>
                </div>
            );
        }

        // RENDER THE ITEMS ARRAY.
        return (
            <>
                {items}
            </>
        );
    }
}

export default itemProjectComponent;