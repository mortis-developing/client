import React from 'react';

import thumbnail from '../../assets/images/static/thumbnail.png';

import Axios from "axios";

Axios.defaults.withCredentials = true;

class itemProjectComponent extends React.Component {

    state = {};

    constructor(props) {
        super(props);

        Axios.defaults.withCredentials = true;

        this.state = {
            projects_array: [],
        };
    }

    handleClick = id => () => {
        Axios.get("http://192.168.2.100:8080/projects/" + id).then((response) => {
            console.log(response);
        });
    }

    click = (e, { name }) => this.setState({activeItem: name});

    componentDidMount() {
        Axios.get('http://192.168.2.100:8080/login').then((response) => {
            let projects = "";
            response.data.user.forEach((row) => {projects = row.projects});

            projects.split(',').forEach((row) => {
                this.setState({
                    projects_array: this.state.projects_array.concat(row)
                });
            });
        });
    }

    render() {
        const items = [];

        for (const [index, value] of this.state.projects_array.entries()) {
            items.push(
                <div className="item project" key={index}>
                    <div className="item-icon" id="list-item" onClick={this.handleClick(value)}>
                        <img src={ thumbnail } alt="project-banner" />
                    </div>
                </div>
            );
        }

        return (
            <>
                {items}
            </>
        );
    }
}

export default itemProjectComponent;