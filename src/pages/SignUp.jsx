import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({});

    return (
        <div className="modal fade" id="signUp" tabIndex="-1" aria-labelledby="signUpLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title mx-auto" id="signUpLabel">
                        New Customer
                        </h1>
                    </div>
                    <div className="modal-body">
                        <form action="" method="post" className="text-center">
                        Formulair d'inscription
                        </form>
                    </div>
                    <div className="modal-footer d-flex justify-content-around">
                        <button type="button" className="btn btn-success">Sign Up</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
