import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PeopleAll from "./components/PeopleAll";
import PeopleInfo from "./components/PeopleInfo";
import StarshipInfo from "./components/StarshipInfo";

function App() {
  	return (
		<Router>
			<Switch>
				<Route exact path='/' component={PeopleAll} />
				<Route path='/people/:id' component={PeopleInfo} />
				<Route path='/starship/:id' component={StarshipInfo} />
			</Switch>
		</Router>
  	);
}

export default App;
