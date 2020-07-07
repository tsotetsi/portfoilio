import React from "react";
import { Grid, Cell, Button } from "react-mdl";

function AboutMe() {
	return (
		<div style={{ width: "100%", margin: "auto" }}>
			<Grid className="about-body">
				<Cell className="cv-left-col" col={4}>
					<div style={{ textAlign: "center" }}>
						<img
							src={require("./profile.jpeg")}
							alt="avatar"
							style={{ height: "200px" }}
						/>
					</div>
					<h2 style={{ paddingTop: "2em" }}>Oslin Johnson</h2>
					<h4 style={{ color: "grey" }}>Programmer</h4>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />

					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
				</Cell>

				<Cell className="cv-right-col" col={8}>
					<h2>About me </h2>
					<p className="about-text">
						I like to think of myself as fearless person, by not being affraid
						to take a leap of faith into the unknown. I started programing not
						to long a ago and I find it something I like to do and even become
						great at it some day. Web development requires some what of a
						problem solving experties and I like to believe I have those
						qaulities to be problem solver of note. I pride myself on moving
						forward and not staying stagnent. I consider myself a peoples person
						gel well with others and rarely offend people or try to bring them
						down. When it comes to being a team player I consider myself a great
						one and very good in communicating with others. I really do enjoy
						conversing with others and picking their brains to just learn more
						about perspectives and things I have little knowledge about. I
						consider everyday a learning day, as any situation can provide a
						teaching moment.
					</p>
					<Button>
						{" "}
						<a href="https://drive.google.com/file/d/1ezlOE9vJ95f8vSoPAX7P1kNiUKrFtLcB/view?usp=sharing">
							more information{" "}
						</a>
					</Button>
				</Cell>
			</Grid>
		</div>
	);
}

export default AboutMe;
