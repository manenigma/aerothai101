import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { selectCurrentUser } from "./vendors/redux/user/user.selector";

import Header from "./components/header.component";
import HomePage from "./pages/home.page";
import RegisterPage from "./pages/register";
import PreventiveMaintenance from "./pages/preventive-maintenance.page";

import "./sass/app.scss";

import { ThemeProvider } from "styled-components";
const styleVariables = require(`sass-extract-loader?{
	"plugins": ["sass-extract-js"]
  }!./sass/abstracts/_variables.scss`);

const App = ({ currentUser }) => {
	return (
		<ThemeProvider theme={styleVariables}>
			<div className="App">
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={() => (currentUser ? <HomePage /> : <RegisterPage />)}
					/>
					<Route
						path="/register"
						render={() =>
							currentUser ? <Redirect to="/" /> : <RegisterPage />
						}
					/>
					<Route
						path="/signin"
						render={() =>
							currentUser ? <Redirect to="/" /> : <RegisterPage />
						}
					/>
					<Route path="/pmi" component={PreventiveMaintenance} />
					{/* <Route
					path="/pmi"
					render={() =>
						currentUser ? <PreventiveMaintenance /> : <Redirect to="/" />
					}
				/> */}
				</Switch>
			</div>
		</ThemeProvider>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: selectCurrentUser(state),
	};
};

export default connect(mapStateToProps)(App);
