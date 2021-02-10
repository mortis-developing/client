import * as React from 'react';

import UpdateThumbnail from "../../assets/images/static/updateThumbnail.jpg";

class UpdateComponent extends React.Component {

    render() {
        return (
            <div className="update-item">
                <div className="left"><img src={UpdateThumbnail} alt="prev" /></div>
                <div className="right">
                    <h4>A closer look at our landscape generation system.</h4>
                    <p>2h ago</p>
                </div>
            </div>
        );
    }
}

export default UpdateComponent;