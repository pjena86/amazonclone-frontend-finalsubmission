import React from 'react'
import { Link } from "react-router-dom";
import "../css/SignIn.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const SignIn = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [usernameError, setUsernameError] = useState({});
	const [pswdError, setPswdError] = useState({});

	const submitSignInForm = (e) => {

		e.preventDefault();

		const isValid = formValidation();
		if (isValid) {

			fetch("http://localhost:5055/auth", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })


			})
				.then(res => res.json())
				.then(data => {


					alert(data.message);

				})
				.catch(err => console.log(`Error : ${err}`));

		}
	}

	//Form Validation
	const formValidation = () => {
		let isValid = true;

		//Email
		if (username === "") {
			setUsernameError("Enter your username!")
			isValid = false;
		}
		// else {

		// 	if (!email.match(/\S+@\S+\.\S+/)) {
		// 		setEmailError("Enter a valid email")
		// 		isValid = false;
		// 	} else {
		// 		setEmailError("");

		// 	}
		// }
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
					}

					setPswdError("");

				}
			}
		}
		return isValid;
	}
	return (

		<div className="signin-form-container">
			<Link to="/">
				<img
					className="signin_logo"
					src="/images/amzonLogo.png" />
			</Link>

			<form onSubmit={submitSignInForm}>
				<div className="signin-form-input">
					<h2>Sign in</h2>
				</div>
				<div className="signin-form-input">
					<strong>Username</strong> <br />
					<input id="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
				</div>
				{Object.keys(usernameError).map((key) => {
					return <div className="error-message">{usernameError[key]}</div>
				})}
				<div className="signin-form-input">
					<strong>Password</strong><br />
					<input id="signinPassword" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />

				</div>

				{Object.keys(pswdError).map((key) => {
					return <div className="error-message">{pswdError[key]}</div>
				})}
				{/* <Link to="/dashboard"> */}
					<div className="signin-form-input" >
						<button id="signinSubmit" type="submit" >Sign in</button>
					</div>
				{/* </Link> */}
				<div className="signin-form-input">
					<hr className="left" /><small>New to site?</small><hr class="right" />
				</div>

				<p className="signin-form-input">
					<Link to="/register" type="button" className="btn btn-light" id="grey-button" >Create an account</Link></p>

				<p className="signin-form-input">By signing in you are agreeing to our <a href="/">Terms of Use</a> and our <a href="/">Privacy Policy</a>.</p>
			</form>
		</div>

	)

}

export default SignIn