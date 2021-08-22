import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GlobalStyle from './globalStyles';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Hero></Hero>
			<h1>dsds</h1>
			<h1>dsds</h1>
			<h1>dsds</h1>
			<h1>dsds</h1>
			<h1>dsds</h1>
			<h1>dsds</h1>
			<h1>dsds</h1>
			<h1>dsds</h1>
		</Router>
	);
}

export default App;

// https://v6.exchangerate-api.com/v6/d56289915940c1af936db3b5/latest/USD
