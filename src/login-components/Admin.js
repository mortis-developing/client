import React from "react";
import SideBarMenu from "../components/SideBarMenu";
import ProjectSideBar from "../components/ProjectSideBar";
import variables from '../config/variables';

export default function Admin() {
    return (
        <>
            <SideBarMenu />
            <ProjectSideBar />
        </>
    );
}