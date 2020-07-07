import React from "react";
import {
	Card,
	CardTitle,
	CardActions,
	Button,
	CardText,
	CardMenu,
} from "react-mdl";

function projects() {
	return (
		<div className="projects-grid">
			{/* Project1 */}
			<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
				<CardTitle
					style={{
						color: "#fff",
						height: "50px",
						background: "#283c86",
					}}
				>
					#React Project #1
				</CardTitle>
				<CardText>
					<img
						src={require("./github-finder.png")}
						alt="profile pic"
						style={{ height: "200px", width: "310px" }}
					/>
					Github Finder
					<p>This is a react-app that finds users on github, using any characters. This is also my first React project I have done </p>
				</CardText>
				<CardActions border>
					<Button colored>
						<a href="https://github.com/Oslinjohn20/github-project-finder">
							Github
						</a>
					</Button>
				</CardActions>
				<CardMenu style={{ color: "#fff" }}></CardMenu>
			</Card>
			{/* Project2 */}
			<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
				<CardTitle
					style={{
						color: "#fff",
						height: "50px",
						background: "#283c86",
					}}
				>
					#React Project #2
				</CardTitle>
				<CardText>
					<img
						src={require("./contact-keeper.png")}
						alt="profile pic"
						style={{ height: "200px", width: "310px" }}
					/>
					Contact Kepper
					<p>
						Thsi react-app is connected with a MongoDB server that allows user
						to create an account and add contacts,edit them and remove them as
						well{" "}
					</p>
				</CardText>
				<CardActions border>
					<Button colored>
						<a
							href="https://github.com/Oslinjohn20/Contact-Keeper-api-"
							rel="noopener noreferrer"
							target="_blank"
						>
							Github
						</a>
					</Button>
				</CardActions>
				<CardMenu style={{ color: "#fff" }}></CardMenu>
			</Card>
			{/* Project3 */}
			<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
				<CardTitle
					className="card-title3"
					style={{
						color: "#fff",
						height: "50px",
						background: "#283c86",
					}}
				>
					#React Project #3
				</CardTitle>
				<CardText>
					<img
						src={require("./it-logger.png")}
						alt="profile pic"
						style={{ height: "200px", width: "310px" }}
					/>
					IT-Logger
					<p>
						A react-app that stores work done and problems that can be logged,
						which the IT techinian should attend . This app also allows user to
						add, remove, edit and remove techinians. It is also saved on a
						server.
					</p>
				</CardText>
				<CardActions border>
					<Button colored>
						<a
							href="https://github.com/Oslinjohn20/IT-Logger"
							rel="noopener noreferrer"
							target="_blank"
						>
							Github
						</a>
					</Button>
				</CardActions>
				<CardMenu style={{ color: "#fff" }}></CardMenu>
			</Card>
			<Button>
				<a
					href="https://github.com/Oslinjohn20/repositories"
					rel="noopener noreferrer"
					target="_blank"
					className="link-text"
				>
					For more projects visit
				</a>
			</Button>
		</div>
	);
}

export default projects;
