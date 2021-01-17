import React from 'react';
import './experience.scss';

const Experience = () => {
	return (
		<div className="experience" id="experience">
			<h1>Skills & Experience</h1>
			<div className="experience__section">
				<div className="experience__professionalExp">
					<h2>Experience as Web Developer</h2>
					<p>
						<i class="fas fa-laptop-code"></i> Two years of
						Professonal Experience:{' '}
					</p>
					<p>
						<i class="fas fa-briefcase"></i>
						One and a half year as a Frontend Developer acquired in{' '}
						<a href="https://www.marfeel.com/" target="blank">
							Marfeel
							<img
								className="experience__companyLogo"
								src="https://www.marfeel.com/public/images/landing/header/logo-marfeel-mini.svg"
								alt="Marfeel"
								title="Marfeel"
							/>
						</a>
					</p>
					<p>
						<i class="fas fa-user-graduate"></i>5 months{' '}
						<a href="https://ubiqum.com/" target="blank">
							Ubiqum Code Academy
							<img
								className="experience__companyLogo"
								src="https://media-exp1.licdn.com/dms/image/C4E0BAQF087-VsyqLSQ/company-logo_100_100/0/1519894739779?e=1619049600&amp;v=beta&amp;t=GlQUDEvtjJV3daHJpD818y-BPgG0b8opKP6GICI9dFw"
								alt="Ubiqum Code Academy"
								title="Ubiqum Code Academy"
							/>
						</a>
					</p>
					<p>Full- Stack JavaScript MERN course</p>
					<p>(MongoDB, Express, React, Node)</p>
				</div>
				<div className="experience__previousExp">
					<h2>Previous Experience and Education</h2>
					<p>
						<i class="fas fa-briefcase"></i>
						Accounting Operation Analyst at{' '}
						<a href="https://www.ge.com/" target="blank">
							GE
							<img
								className="experience__companyLogo"
								src="https://media-exp1.licdn.com/dms/image/C4E0BAQFHuO0SdhPijA/company-logo_100_100/0/1575730572068?e=1619049600&amp;v=beta&amp;t=_Pg3CeutrwwSeXlZfPkIJ9Yh6krc9D8cVzjLoXoK0Rw"
								alt="GE General Electric"
								title="GE General Electric"
							/>
						</a>
					</p>
					<p>
						<i class="fas fa-graduation-cap"></i>Master Degree -
						International Management
					</p>
					<p>
						<i class="fas fa-graduation-cap"></i>Bachelor Degree -
						Accounting and Economics
					</p>
				</div>
			</div>
			<div className="experience__section">
				<div className="experience__techSkills">
					<h2>Tech skills</h2>
					<div className="experience__techSKillsIcons">
						<i class="fab fa-html5" title="HTML5"></i>
						<i class="fab fa-css3-alt" title="CSS3"></i>
						<i class="fab fa-sass" title="Sass"></i>
						<i class="fab fa-js-square" title="JavaScript"></i>
						<i class="fab fa-react" title="React"></i>
						<img
							className="reduxIcon"
							src="images/redux.png"
							alt="redux"
						/>
						<img
							className="reduxIcon"
							src="images/firebase.png"
							alt="firebase"
						/>
						<i class="fab fa-vuejs" title="Vue"></i>
					</div>
				</div>
				<div className="experience__softSkills">
					<h2>Soft Skills</h2>
					<p>
						<i class="fas fa-headphones-alt"></i>Active listener
					</p>
					<p>
						<i class="fas fa-smile-beam"></i>Positive Attitude
					</p>
					<p>
						<i class="fas fa-users"></i>Team player
					</p>
					<p>
						<i class="fas fa-chalkboard-teacher"></i>Love learning
					</p>
					<p>
						<i class="fas fa-lightbulb"></i>Problem Solving
					</p>
				</div>
			</div>
		</div>
	);
};

export default Experience;
