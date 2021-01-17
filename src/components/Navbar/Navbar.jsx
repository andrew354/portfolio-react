import React, { useState } from 'react';
import './navbar.scss';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

	return (
			<nav className="navbar">
				<div className="navbar__container stroke">
					<div className="navbar__menuIcon" onClick={handleClick}>
						<img src={click ? "images/cancel.png" : "images/menu.png"} />
					</div>
                    <ul className={click ? 'navbar__items active' : 'navbar__items'}>
                        <li className="navbar__item" onClick={handleClick}>
                            <Link to="/" className="navbar__itemMobile"
                                onClick={handleClick}
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Home
                            </Link>
                        </li>
                        <li className="navbar__item" onClick={handleClick}>
                            <Link to="/about" className="navbar__itemMobile"
                                onClick={handleClick}
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    About
                            </Link>
                        </li>
                        <li className="navbar__item" onClick={handleClick}>
                            <Link to="/projects" className="navbar__itemMobile"
                                onClick={handleClick}
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Projects
                                </Link>
                        </li>
                        <li className="navbar__item" onClick={handleClick}>
                            <Link to="/experience" className="navbar__itemMobile"
                                onClick={handleClick}
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Skills & Experience
                            </Link>
                        </li>
                        <li className="navbar__item" onClick={handleClick}>
                            <Link to="/contact" className="navbar__itemMobile"
                                onClick={handleClick}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    Contact
                            </Link>
                        </li>
                        <div className="navbar__socialIcons">
                            <li>
                                <a href="https://www.linkedin.com/in/a-pani/" target="blank">
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
                    </ul>
				</div>
			</nav>
	);
};

export default Navbar;
