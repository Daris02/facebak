import React from 'react';
import { useForm } from 'react-hook-form';
import { addUser } from "./apis/user/user.apis";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({});

    const onSubmit = (data) => {
        console.log(data);
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
        <div className="modal fade" id="signUp" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border border-warning">
                    <div className="modal-header">
                        <h1 className="modal-title mx-auto" id="signUpLabel">
                            Create new account
                        </h1>
                    </div>
                    <div className="modal-body d-flex justify-content-around py-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-2">
                            <div className="mb-4">
                                <label >User name</label>
                                <input type="text" className="form-control" {...register("username", { required: true })}/>
                            </div>
                            <div className="mb-4">
                                <label >Email</label>
                                <input type="email" className="form-control" {...register("email", { required: true })}/>
                                { errors.name && ( <span className="text-danger">Emal required /!\</span>) }
                            </div>
                            <div className="mb-4">
                                <label >Password</label>
                                <input type="password" className="form-control" {...register("password", { required: true })}/>
                            </div>
                            <div className="mb-4">
                                <label >Confirm password</label>
                                <input type="password" className="form-control" {...register("confirmPassword", { required: true })}/>
                            </div>
                            <div className="d-grid my-3">
                                <button type="submit" className="btn btn-outline-warning">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
