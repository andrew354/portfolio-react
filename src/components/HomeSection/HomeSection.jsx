import React from 'react';
import './homeSection.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
// import Projects from '../Projects/Projects';

const HomeSection = () => {
	return (
		<div className="home__container">
			<video src="/videos/video-5.mp4" autoPlay loop muted />
			<h1>Hey there</h1>
			<p><strong>I'm Andrea, </strong></p>
			<p>Front-end Web Developer</p>
			<div className="home__buttons">
				<Link
					activeClass="active"
					to="projects"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<button className="buttons buttons__portfolio">
						Portfolio
					</button>
				</Link>
				<Link
					activeClass="active"
					to="experience"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<button className="buttons buttons__skills">Skills</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeSection;
