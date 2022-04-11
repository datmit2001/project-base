import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "./use_form";
import "./login.css";
import {routers} from "../../../routers";

export const Login = () => {

	const [passwordShown, setPasswordShown] = useState(false);
	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};
	const { formValue, setFormValue, errors, validation } = useForm();


	function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
		setFormValue({
			...formValue,
			email: e.target.value,
		});
	}

	function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
		setFormValue({
			...formValue,
			password: e.target.value,
		});
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (validation()) {
			// onSubmit(formValue);
		}
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<h1 className="title-login">Login</h1>
				<div className="email">
					<p className="title-input">Email</p>
					<input  type={"email"} name="email" value={formValue?.email ?? ""} onChange={onChangeEmail}
					/>
				</div>
				<div className="error">
					<span >
						{errors?.email?.message}
					</span>
				</div>
				<div className="title-password">
					<p className="title-input">Password</p>
					<a className="forgot-passwor" href={routers.forgotPassword()}>Forgot password?</a>
				</div>
				<div className="password">
					<input type={passwordShown ? "text" : "password"} placeholder={"At least 8 characters including a number"} name="password" value={formValue?.password ?? ""} onChange={onChangePassword} />
					{passwordShown ? (
						<FaEye className="icon"  onClick={togglePassword} />
					) : (
						<FaEyeSlash className="icon" onClick={togglePassword} />
					)}
				</div>
				<div className="error">
					<span>
						{errors?.password?.message}
					</span>
				</div>
				<button className="login">Login</button>
			</form>
			<a href={"#"} className="register">Don’t have an account?</a>
			<button className="account">Create Account</button>
		</div>
	);
};

