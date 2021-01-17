import React from 'react';
import './contact.scss';

const Contact = () => {
	return (
		<div className="contact" id="contact">
			<h1>Contact</h1>
			<div className="contact__socialIcons">
				<li>
					<a
						href="https://www.linkedin.com/in/a-pani/"
						target="blank"
					>
						<i className="fa fa-linkedin"></i>
					</a>
				</li>
				<li>
					<a href="https://github.com/andrew354" target="blank">
						<i className="fa fa-github"></i>
					</a>
				</li>
				{/* <li>
                                <a href="https://www.instagram.com/andre0592_/" target="blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li> */}
				<li>
					<a href="mailto:andreapani92@gmail.com" target="blank">
						<i className="fa fa-envelope"></i>
					</a>
				</li>
			</div>
		</div>
	);
};

export default Contact;
