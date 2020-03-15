import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
	username: yup
		.string()
		.required("Username is required"),
	password: yup
		.string()
		.min(5, "Password must be at least 4 characters")
		.required("Password is required")
});

export function LoginForm() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name="username" placeholder="Username" ref={register} />
			{errors.username && <p>{errors.username.message}</p>}

			<input name="password" type="password" placeholder="Password" ref={register} />
			{errors.password && <p>{errors.password.message}</p>}

			<input type="submit" />
		</form>
	);
}

export default LoginForm;