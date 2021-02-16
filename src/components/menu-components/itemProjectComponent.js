import React from 'react';

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
            projects_array: [],
            projects_images: [],
        };
    }

    // SEND GET REQUEST WHEN ICON IS CLICKED.
    handleClick = id => () => {
        Axios.get("http://192.168.2.100:8080/projects/get/" + id).then((response) => {
            variables.currentProject.push(response);
        });
        console.log(variables.currentProject);
    }

    click = (e, { name }) => this.setState({activeItem: name});

    componentDidMount() {

        // SEND REQUEST TO /LOGIN SERVER
        Axios.get('http://192.168.2.100:8080/login').then((response) => {

            // GET projects FROM USER
            let projects = "";
            response.data.user.forEach((row) => {projects = row.projects});

            // SPLIT 1,2,3 BY ,
            projects.split(',').forEach((row) => {

                // UPDATE STATE ARRAY
                this.setState({ projects_array: this.state.projects_array.concat(row) });
            });

            for(const [index, value] of this.state.projects_array.entries()) {

                // GET PROJECT IMAGE
                Axios.get('http://192.168.2.100:8080/projects/' + value).then((response) => {
                    response.data.forEach((row) => {
                        this.setState({ projects_images: this.state.projects_images.concat(row.image) });
                        //this.state.projects_images.push(row.image);
                    });
                });
            }
        });
    }

    render() {
        //../../assets/images/static/thumbnail.png
        // ARRAY WITH ALL THE PROJECTS WERE ARE IN THE LIST OF THE USER AS OBJECT.
        const items = [];

        for (const [index, value] of this.state.projects_array.entries()) {
            items.push(
                <div className="item project" key={index}>
                    <div className="item-icon expand" id="list-item" data-title="item-tooltip" onClick={this.handleClick(value)}>
                        <img src={`/images/static/${this.state.projects_images[index]}`} alt="thumbnail" />
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