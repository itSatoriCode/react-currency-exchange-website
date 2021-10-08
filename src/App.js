import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Header';
import GlobalStyle from './globalStyles';
import DropdownTest from './pages/DropdownTest';
import HomePage from './pages/HomePage';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/test" component={DropdownTest} />
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;

// https://v6.exchangerate-api.com/v6/d56289915940c1af936db3b5/latest/USD
