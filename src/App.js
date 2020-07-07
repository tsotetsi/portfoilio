import React from "react";
import "./App.css";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";

function App() {
	return (
		<div className="demo-big-content">
			<Layout>
				<Header
					className="header-color"
					title={
						<Link style={{ fontFamily:"Fondamento, cursive", color: "white" }} to="/">
							My Porfolio
						</Link>
					}
					scroll
				>
					<Navigation>
						<Link to="/cv">CV</Link>
						<Link to="/aboutme">About Me</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/projects">Projects</Link>
					</Navigation>
				</Header>
				<Drawer
					title={
						<Link style={{ textDecoration: "none", color: "black" }} to="/">
							My Porfolio
						</Link>
					}
				>
					<Navigation>
						<Link to="/cv">CV</Link>
						<Link to="/aboutme">About Me</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/projects">Projects</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
