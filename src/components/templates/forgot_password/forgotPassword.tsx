import React from "react";
import {useForm} from "../login/use_form";
import "./forgotPassword.css";

export const ForgotPassword = () => {

	const { formValue, setFormValue, errors, validation } = useForm();

	function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
		setFormValue({
			...formValue,
			email: e.target.value,
		});
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (validation()) {
			// onSubmit(formValue);
		}
	}
	return (
		<div className="container" >
			<form onSubmit={handleSubmit}>
				<h1 className="title-forgotpassword">Password Reset</h1>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				<p >We'll email you PIN code for creating your new password.</p>
				<p className="title-input">Email</p>
				<input  type={"email"} value={formValue?.email ?? ""} onChange={onChangeEmail} />
				<div className="error">
					<span>
						{errors?.email?.message}

					</span>
				</div>
				<button className="send">Send</button>
			</form>
		</div>
	);
};


