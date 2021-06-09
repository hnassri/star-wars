import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PeopleAll from "./components/PeopleAll";

function App() {
  	return (
		<Router>
			<Switch>
				<Route exact path='/' component={PeopleAll} />
			</Switch>
		</Router>
  	);
}

export default App;
