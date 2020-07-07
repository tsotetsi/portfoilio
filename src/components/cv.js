import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

function cv() {
	return (
		<div>
			<Grid className="cv-body">
				<Cell className="cv-left-col" col={4}>
					<div style={{ textAlign: "center" }}>
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst3.depositphotos.com%2F10665628%2F16844%2Fv%2F1600%2Fdepositphotos_168445462-stock-illustration-young-afro-man-avatar-character.jpg&f=1&nofb=1"
							alt="avatar"
							style={{ height: "200px" }}
						/>
					</div>
					<h2 style={{ paddingTop: "2em" }}>Oslin Johnson</h2>
					<h4 style={{ color: "grey" }}>Programmer</h4>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p>
						I am fairly new to the programming industry but it always had my
						attention, I just never thought that I would be smart or good enough
						till now. I have changed my mindset and stuck to my guns, add more
						determination to get to a point where I aspire to become a full stack developer. I
						am still a junior developer for now but my goal doesn't stop there.
					</p>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<h5>Address: 11 Eight Street Bishop Lavis 7490</h5>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p></p>
					<h5>Phone: 0712482443</h5>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p></p>
					<h5>Email: ossiekcjohnson@gmail.com </h5>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p></p>
					<h5>Testimonials</h5>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
					<p>
						<h6> Chad Hoosain - Developer </h6> ---- Oslin has great leadership
						qualities, he has quite a never-say-die attitude and will not give
						up if he does not understand and always seeks for self improvement,
						whether in its in quality of work or his good qualities as a person.
						Definitely a go-getter and I see him in big places in the future.{" "}
					</p>
					<hr style={{ borderTop: "3px solid #833fb2", width: "30%" }} />
					<p>
						<h6> Anele Sokwane - Developer </h6> ---- Oslin is a great
						developer, and not just that, he has amazing conversational skills.
						He is always very passionate about everything that he does. I see
						him as a natural-born leader. He would be perfect for any
						development project because he always give 100%.{" "}
					</p>
					<hr style={{ borderTop: "3px solid #833fb2", width: "30%" }} />
					<p>
						<h6> Thapelo Tsotetsi - Lecture </h6> ---- Oslin Johnson is a Life
						Choices Academy students for 2020. One thing you should know about
						Oslin is that he has an always-learning mindset and good
						interpersonal skills. He always try new things by himself before
						seeking for help.{" "}
					</p>
					<hr style={{ borderTop: "3px solid #833fb2", width: "30%" }} />
					<p>
						<h6>Brittney Bouwers - Developer </h6> ----Oslin is a hardworking
						individual who always have a positive outlook on life . He is always
						there to help others and he always finds a way to understand work no
						matter how complicated it is .{" "}
					</p>
					<hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
				</Cell>

				<Cell className="cv-right-col" col={8}>
					<h2>Education</h2>
					<Education
						startYear={2006}
						endYear={2010}
						schoolName="Elsies River High"
						schoolDescription="Subjects: English, Afrikaans, Life Science, Accounting, Mathematics, Physical Science"
					/>
					<Education
						startYear={2012}
						endYear={2013}
						schoolName="North-Link College"
						schoolDescription="Subjects: Engineering Science, Engineering Mathematics, Engineering Science, Technical Drawings"
					/>
					<Education
						startYear={2014}
						endYear={2015}
						schoolName="Imperial Technical Training Academy "
						schoolDescription="Courses Completed: CBMT Motor Mechanic – Level 2, CBMT Motor Mechanic – Level 3  , CBMT Motor Mechanic – Level 4"
					/>
					<Education
						startYear={2020}
						endYear={2020}
						schoolName="Life Choices Coding Academy "
						schoolDescription="Courses Completed: Web Development bootcamp"
					/>

					<hr style={{ borderTop: "3px solid #22947 " }} />
					<h2>Experience</h2>
					<Experience
						startYear={2013}
						endYear={2013}
						jobName="First Job"
						jobDescription="An apprentice at Hyundai Pardien Eiland "
					/>
					<Experience
						startYear={2013}
						endYear={2015}
						jobName="Second Job"
						jobDescription="An apprentice at Engine and Gearbox Exchange "
					/>
					<Experience
						startYear={2017}
						endYear={2020}
						jobName="Third Job"
						jobDescription="A general worker at Lourens Roadmarking "
					/>

					<hr style={{ borderTop: "3px solid #22947 " }} />
					<h2>Skills</h2>
					<Skills skill="JavaScript" progress={60} />
					<Skills skill="HTML" progress={70} />
					<Skills skill="CSS" progress={70} />
					<Skills skill="React" progress={60} />
					<Skills skill="Python" progress={70} />
					<Skills skill="MongoDB" progress={50} />
				</Cell>
			</Grid>
		</div>
	);
}

export default cv;
