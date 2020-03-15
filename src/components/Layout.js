import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Login from "./Login";

function Layout() {
	return (
		<Router>
			<NavLink to="/" exact>React App <br /></NavLink>
			<div>
				<NavLink to="/" exact className="nav-link">
					Home |
				</NavLink>
				<NavLink to="/news" className="nav-link">
					News |
				</NavLink>
				<NavLink to="/login" className="nav-link">
					Login
				</NavLink>
			</div>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/news" component={News} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default Layout 