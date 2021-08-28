import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeatureSection from './components/FeatureSection/FeatureSection';
import Footer from './components/Footer/Footer';
import { FooterRow } from './components/Footer/FooterStyles';
import Navbar from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import PhoneSection from './components/PhoneSection/PhoneSection';
import GlobalStyle from './globalStyles';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Hero></Hero>
			<PhoneSection></PhoneSection>
			<FeatureSection />
			<InfoSection></InfoSection>
			<Footer></Footer>
		</Router>
	);
}

export default App;

// https://v6.exchangerate-api.com/v6/d56289915940c1af936db3b5/latest/USD
