import React from "react";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		return (
            <div className= "contact-form">
			  <form
				id="fs-frm"
				name="simple-contact-form"
				acceptCharset="utf-8"
				action="https://formspree.io/YOUR_EMAIL_HERE"
				method="post"
			  >
				<fieldset id="fs-frm-inputs">
					<label htmlFor="full-name">Full Name</label>
					<input
						type="text"
						name="name"
						id="full-name"
						placeholder="First and Last"
						required
					/>
					<label htmlFor="email-address">Email Address</label>
					<input
						type="email"
						name="_replyto"
						id="email-address"
						placeholder="email@name.com..."
						required
					/>
					<label htmlFor="message">Message</label>
					<textarea
						rows={5}
						name="message"
						id="message"
						placeholder="Write your message here..."
						required
						defaultValue={""}
					/>
					<input
						type="hidden"
						name="_subject"
						id="email-subject"
						defaultValue="Contact Form Submission"
					/>
				</fieldset>
				<input type="submit" defaultValue="Submit" />
		    	</form>
            </div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
