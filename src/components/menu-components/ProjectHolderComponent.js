import react, { useEffect, useState } from 'react';

import ProjectItemComponent from './ProjectItemComponent';
import axios from 'axios';

export default function ProjectHolderComponent() {

    const [userID, setUserID] = useState('');
    const [projectIDs, setProjectIDs] = useState('');

    const projectItems = [];
    const projects = [];

    const getProjects = async (id) => {
        const response = await axios.get('http://192.168.2.100:8080/projects/' + id).then(row => {return row});
        return response.data[0].image;
    }

    const pushToProjects = (id, image, name) => {
        projectItems.push(
            <ProjectItemComponent key={id} image={image} name={name} />
        );
    }

    const getImage = (value) => {
        return getProjects(value).then(row => {return row})
    }

    const test = () => {
        axios.get('http://192.168.2.100:8080/login').then((response) => {
            response.data.user.forEach((row) => {
                setUserID(row.id);
                setProjectIDs(row.projects);
            });
        });

        const pid = projectIDs.split(',');
        //getProjects(pid[0]).then(row => console.log(row));
        for (const [index, value] of pid.entries()) {
            console.log(getImage(value));
            pushToProjects(index, getImage(value), 'test');
        }
    }

    test();

    return (
        <div className="holder" key="projectHolder">
            {projectItems}
        </div>
    )

    //console.log(projects);
}