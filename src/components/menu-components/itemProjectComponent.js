import React, { useEffect } from 'react';

import axios from "axios";
import ProjectItemComponent from './ProjectItemComponent';

axios.defaults.withCredentials = true;

class itemProjectComponent extends React.Component {

    state = {};

    constructor(props) {
        super(props);

        this.state = {
            userID: 0,
            projectIDs: ''
        }
    }

    componentDidMount() {
        axios.get('http://192.168.2.100:8080/login').then((response) => {
            response.data.user.forEach((row) => {
                this.state.userID = row.id;
                this.state.projectIDs = row.projects;
            });
        });
    }

    render() {

        let projects = [];

        let pid = this.state.projectIDs.split(',');
        for(const [index, value] of pid.entries()) {
            axios.get('http://192.168.2.100:8080/projects/' + value).then((response) => {
                projects.push(
                    response
                );    
            });
        }

        return (
            <div className="holder">
                {projects.data}
            </div>
        );
    }
}

export default itemProjectComponent;