import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { addUser } from "./apis/user/user.apis";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({});

    const onSubmit = (data) => {
        alert(data)
        // addUser(data).then(res => {
        //     if(res.status === 200) {
        //         alert("User added successfully!")
        //     } else {
        //         alert('User not create')
        //     }
        // }).catch(e => {
        //     alert('Error server : ' + e);
        // });
    };

    return (
		<div className="login d-flex justify-content-center align-items-center vh-100 bg-primary-ligth">
            <div className="p-5 rounded bg-white border border-warning">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-2">
                    <h2 className="text-center">Create new account</h2>
                    <div className="mb-2">
                        <label >User name</label>
                        <input type="text" className="form-control" {...register("username", { required: true })}/>
                    </div>
                    <div className="mb-2">
                        <label >Email</label>
                        <input type="email" className="form-control" {...register("email", { required: true })}/>
                        { errors.name && ( <span className="text-danger">Emal required /!\</span>) }
                    </div>
                    <div className="mb-2">
                        <label >Password</label>
                        <input type="password" className="form-control" {...register("password", { required: true })}/>
                    </div>
                    <div className="mb-2">
                        <label >Confirm password</label>
                        <input type="password" className="form-control" {...register("confirmPassword", { required: true })}/>
                    </div>
                    <div className="d-grid my-4">
                        <button type="submit" className="btn btn-outline-warning" id="signup">Sign Up</button>
                    </div>
                    <hr />
                    <Link to="/">
                        <button type="button" className="btn btn-outline-primary w-100">Sign In</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
