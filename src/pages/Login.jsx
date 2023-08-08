import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SignUp from './SignUp';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm({});

  const onSubmit = (data) => {
    // loginUser(data);
    // const status = loginUser(data);
    // status.then(r => {
    //     if(r.status == 200) {
    //         window.location = '/receptioniste/dashboard'
    //     } else {
    //         alert('Identifiant invalid')
    //     }
    // }).catch(e => {
    //     alert('Identifiant invalid')
    // });
  };

  return (
    <div className="login d-flex justify-content-center align-items-center 100=w vh-100 bg-primary-ligth">
      <div className="p-5 rounded bg-white border border-primary">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" className="form-control" {...register("user_email", { required: true })}/>
            { errors.name && ( <span className="text-danger">Emal required /!\</span>) }
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" {...register("password", { required: true })}/>
          </div>
          <div>
            <input type="checkbox" className="custom-control custom-checkbox" />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <p className="text-center my-2">
            <a className="text-decoration-none" href="./SignUp.jsx">
              Forgot Password
            </a>
          </p>
          <hr />
          <div className="d-grid">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signUp">
              Sign Up
            </button>
          </div>
            <SignUp />
        </form>
      </div>
    </div>
  );
};

export default Login;
