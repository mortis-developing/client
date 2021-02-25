import react from 'react';

export default function({image, name}) {
    return (
        <div className="item project">
            <div className="item-icon expand" id="list-item" data-title={name}>
                <img src={`/images/static/projects/${image}`} alt="thumbnail" />
            </div>
        </div>
    );
}