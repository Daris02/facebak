import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { authUser } from '../../apis/user/user.apis';

const Login = () => {
	const { register, handleSubmit } = useForm({});

	let border = "p-5 rounded bg-white border border-primary";
	let errorMessage = "";

	const onSubmit = (data) => {
		authUser(data).then(res => {
			if(res.id) {
		        window.location = '/user/home'
		    }
		}).catch(e => {
		    if (e) {
				border = "p-5 rounded bg-white border border-danger";
				errorMessage = "Fail authentication";
				setTimeout(() => {
					border = "p-5 rounded bg-white border border-primary";
					errorMessage = "";
				}, 1500);
		        alert('Authentication failed')
			}
		});
	};

	return (
		<div className="login d-flex justify-content-center align-items-center vh-100 bg-primary-ligth">
			<div className={border}>
				<form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-2">
					<h3 className="text-center">Sign In</h3>
					<div className="mb-2">
						<label htmlFor="username">User name</label>
						<input type="username" name="username" className="form-control" {...register("username", { required: true })}/>
					</div>
					<div className="mb-2">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" className="form-control" {...register("email", { required: true })}/>
					</div>
					<div className="mb-2">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" className="form-control" {...register("password", { required: true })}/>
					</div>
					<div>
						<input type="checkbox" className="custom-control custom-checkbox" />
						<label htmlFor="check" className="custom-input-label ms-2">Remember me</label>
					</div>
					<div className="d-grid">
						<button type="submit" className="btn btn-outline-primary">Sign in</button>
					</div>
					<span className="text-center text-danger">{errorMessage}</span>
					<hr />
					<p className="text-center my-2">
						<a className="text-decoration-none disabled" href="/">Forgot Password</a>
					</p>
					<div className="d-grid">
						<Link to="/signup">
							<button type="button" className="btn btn-outline-warning w-100">Sign Up</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
  	);
};

export default Login;
