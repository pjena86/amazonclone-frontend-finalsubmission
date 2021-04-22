import React from 'react'
import "../css/Registration.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = (values) => {

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const [confirmPassword, setConfirmPassword] = useState("");

	const [usernameError, setUsernameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [pswdError, setPswdError] = useState("");
	//const [confirmPswdError, setConfirmPswdError] = useState("");


	const submitSignUpForm = (e) => {

		e.preventDefault();



		const isValid = formValidation();
		if (isValid) {

			fetch("http://localhost:5055/users", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, email, password })

			})
				.then(res => res.json())
				.then(data => {


					alert(`The user ${data.username} added successfully`);
					 
					})
					
					
				.catch(err => console.log(`Error : ${err}`));
				
		}
	}

	//Form Validation
	const formValidation = () => {
		let isValid = true;

		//Name
		if (username === "") {
			setUsernameError("Enter your name!")
			isValid = false;
		} else {
			setUsernameError("");

		}

		//Email
		if (email === "") {
			setEmailError("Enter your Email!")
			isValid = false;
		} else {

			if (!email.match(/\S+@\S+\.\S+/)) {
				setEmailError("Enter a valid email")
				isValid = false;
			} else {
				setEmailError("");

			}
		}
		//Password
		if (password === "") {
			setPswdError("Enter your password!")
			isValid = false;
		} else {

			if (!password.match(/^[a-zA-Z0-9]/)) {
				setPswdError("Enter a valid password")
				isValid = false;
				
			} else {
				if (password.length < 6) {
					setPswdError("Password length should not be less than 6")
					isValid = false;

				} else {
					if (password.length > 12) {
						setPswdError("Password length should not exceed 12")
						isValid = false;
					} else {

						setPswdError("");
					}
				}
			}
			// Confirm Password
			// if (confirmPassword === "") {
			// 	setConfirmPswdError(" You must enter confirm password!")
			// 	isValid = false;
			// } else
			// 	if (confirmPassword !== password) {
			// 		setConfirmPswdError("Password does not match!")
			// 		isValid = false;
			// 	} else {
			// 		setConfirmPswdError("");

			// 	}


		}

		return isValid;
	}
	return (
		<div className="registration-form-container">
			<Link to="/">
				<img
					className="registration_logo"
					src="/images/amzonLogo.png" />
			</Link>
			<form action="/" onSubmit={submitSignUpForm}>
				<div className="form-group">
					<h2>Create account</h2>
				</div>


				<div className="form-group">
					<label className="control-label" for="username">Your name</label>
					<input id="username" type="text" className="form-control" value={username} onChange={(e) => { setUsername(e.target.value) }} />

					{Object.keys(usernameError).map((key) => {
						return <div  className ="error-message">{usernameError[key]}</div>
					})}
					<i class="icon-alert"></i>
				</div>


				<div className="form-group">
					<label className="control-label" for="email">Email</label>
					<input id="email" type="text" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />

					{Object.keys(emailError).map((key) => {
						return <div  className ="error-message">{emailError[key]}</div>
					})}

				</div>


				<div class="form-group">
					<label className="control-label" for="password">Password</label>
					<input id="password" type="text" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />

					{Object.keys(pswdError).map((key) => {
						return <div  className ="error-message">{pswdError[key]}</div>
					})}

					{/* <i class="icon-alert"></i> */}
					{/* <div class="alert-content">Passwords must consist of at least 6 characters</div> */}


				</div>
				{/* <div className="form-group">
					<label className="control-label" for="confirm-password">Password again</label>
					<input id="confirm-password" type="text" className="form-control" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />

					{Object.keys(confirmPswdError).map((key) => {
						return <div style={{ color: "red" }}>{confirmPswdError[key]}</div>
					})}
				</div> */}


				<div className="form-group">
					{/* <Link to = "/signin"> */}
					<button id="signupSubmit" type="submit" className="btn btn-info btn-block">Create your account</button>
					{/* </Link> */}
				</div>
				<p class="form-group">By creating an account, you agree to our <a href="/">Terms of Use</a> and our <a href="/">Privacy Policy</a>.</p>
				<hr />
				{/* <p "Already have an account?" ><a href="/">Sign in</a></p> */}
			</form>
			{/* </div>
			</div>
		</div> */}
		</div>
	)
}

export default Registration
