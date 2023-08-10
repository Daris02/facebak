import React from 'react';
import { useForm } from 'react-hook-form';
import SignUp from './SignUp';
import { authUser } from './apis/user/user.apis';

const Login = () => {
	const { register, handleSubmit, formState: { errors }, } = useForm({});

	const onSubmit = (data) => {
		const status = authUser(data);
		status.then(res => {
		    if(res.status === 200) {
		        window.location = '/user/home'
		    } else {
		        alert('Identified invalid')
				// window.location.replace('/user/home')
		    }
		}).catch(e => {
		    alert('Error server : ' + e);
		});
	};

	return (
		<div className="login d-flex justify-content-center align-items-center vh-100 bg-primary-ligth">
			<div className="p-5 rounded bg-white border border-primary">
				<form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-2">
					<h3 className="text-center">Sign In</h3>
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
					<hr />
					<p className="text-center my-2">
						<a className="text-decoration-none" href="#">Forgot Password</a>
					</p>
					<div className="d-grid">
						<button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#signUp">Sign Up</button>
					</div>
					<SignUp />
				</form>
			</div>
		</div>
  	);
};

export default Login;
