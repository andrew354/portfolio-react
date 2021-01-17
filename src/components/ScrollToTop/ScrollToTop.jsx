import React from 'react';
import './scrollToTop.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
	return (
		<Link
			to="/"
			className="navbar__itemMobile"
			activeClass="active"
			to="home"
			spy={true}
			smooth={true}
			offset={-70}
			duration={500}
		>
			<div className="scrollToTop">
				<i className="scrollToTop__icon fas fa-chevron-up"></i>
			</div>
		</Link>
	);
};

export default ScrollToTop;
