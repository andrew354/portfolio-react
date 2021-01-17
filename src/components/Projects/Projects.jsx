import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import './projects.scss';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    async function fetchData() {
        const response = await fetch(
            'https://api.github.com/users/andrew354/repos'
        );
        if (response.status === 404) {
            console.log('ERROR')
        } else if (response.status === 200) {
            let reposData = await response.json();
            setProjects(reposData)
        } else console.log("Unknown error occured, please reload your page");
    }

    console.log(projects)

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className="cards" id="projects">
            <h1>Check out my Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items cards__items__row__one">
                        {
                            projects.map(project => (
                                <CardItem 
                                    key={project.id}
                                    src="images/img-9.jpg"
                                    text={project.name}
                                    label="React"
                                    path="/services"
                                    html_url={project.html_url}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;
