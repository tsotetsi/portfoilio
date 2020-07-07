import React from "react";
import { Grid, Cell } from "react-mdl";

function landingpage() {
	return (
		<div style={{ width: "100%", margin: "auto" }}>
			<Grid className="landing-grid">
				<Cell col={12}>
					<div className="avatar-card">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst3.depositphotos.com%2F10665628%2F16844%2Fv%2F1600%2Fdepositphotos_168445462-stock-illustration-young-afro-man-avatar-character.jpg&f=1&nofb=1"
							alt="avatar"
							className="avatar-img"
						/>
					</div>
					<div className="banner-text">
						<h1>Junior Web Developer</h1>

						<hr />
						<p>
							HTML/CSS | Boostrap | JavaScript | React | MySQL | MongoDB |
							NodeJS
						</p>
						<div className="social-links">
							{/* LinkedIn */}
							<a
								href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
								rel="noopener noreferrer"
								target="_blank"
							>
								<i className="fa fa-linkedin-square" aria-hidden="true"></i>
							</a>
							{/* Github */}
							<a
								href="https://github.com/Oslinjohn20/repositories"
								rel="noopener noreferrer"
								target="_blank"
							>
								<i className="fa fa-github-square" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</Cell>
			</Grid>
		</div>
	);
}

export default landingpage;
