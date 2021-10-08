import React from 'react';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import Hero from '../components/Hero/Hero';
import InfoSection from '../components/InfoSection/InfoSection';
import PhoneSection from '../components/PhoneSection/PhoneSection';

const HomePage = () => {
	return (
		<>
			<Hero></Hero>
			<PhoneSection></PhoneSection>
			<FeatureSection />
			<InfoSection></InfoSection>
		</>
	);
};

export default HomePage;
