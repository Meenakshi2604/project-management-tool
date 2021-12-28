import React from 'react'

const ProjectDetails = (props) =>{
    const id = props.match.params.id;
    return(
        <div className="container section proect-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Content about the project.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Meenakshi Nair</div>
                    <div>Date and Time</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;