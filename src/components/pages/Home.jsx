import React from 'react';
import Projects from '../Projects/Projects';
import HomeSection from '../HomeSection/HomeSection';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Home = () => {
	
	return (
		<div className="home">
			<HomeSection />
			<About />
			<Projects />
			<Experience />
			<Contact />
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default Home;
