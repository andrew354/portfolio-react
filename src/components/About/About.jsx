import React, { useState } from 'react';
import './about.scss';

const About = () => {

    const [readMore, setReadMore] = useState(false);
    const handleClick = () => setReadMore(!readMore);

	return (
		<div className="about" id="aboutme">
			<h1 className="about__title">About Me</h1>
			<div className="about__content">
				<figure className="about__img__container">
					<img
						src="images/profile_pic.jpg"
						alt="profile picture"
						className="about__img"
					/>
				</figure>
				<div className="about__text__container">
					<h2 className="about__text__title">
						My name is Andrea Pani. <br/> My passion and interest is frontend
						creating
					</h2>
					<p>
						I choosed this path of career because of my passions and
						interests. Creative creating new things and looking how they
						develop from nothing to something big gives me a lot of
						satisfaction and energy to carry on. 
					</p>
					<button className={readMore ? "about__hide" : "about__button"} onClick={handleClick}>{readMore ? "Hide" : "Read More"}</button>
						<p className={readMore ? "about__showMore" : "about__hide"}>Curiosity how made
						changes and improvement will affect on final form of my work
						are something what always accompanies me during creating and
						development. Also this curiosity together with
						self-satisfaction are something what the most exiciting me
						in whole creating process. My adventure with frontend was
						begin on first year of my IT study, from this time I created
						a few websites and web application. Currently I am during
						creating reservation system app named "Reservattio" using
						React, Express and relational database PostgreSQL.</p>
						<button className={readMore ? "about__showMore" : "about__hide"} onClick={handleClick}>{readMore ? "Hide" : "Read More"}</button>
					<p>Check my portfolio and personally see what I can do.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
