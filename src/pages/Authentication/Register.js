import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    //for email and pass register
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //react form 
    const { register, formState: { errors }, handleSubmit } = useForm();

    //click register button
    const onSubmit = (data) => {

        const name = data.name
        const email = data.email
        const password = data.password
        createUserWithEmailAndPassword(email, password)

    }

    return (

        <div className="bg-base-100">

            <div className="text-center my-5">
                <h1 className="text-4xl font-bold text-primary">Register</h1>
            </div>

            {/*card body */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-8">


                <div className="card-body">



                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* for name */}
                        <div className='form-control'>

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type='text'
                                placeholder='Your name'
                                class="input input-bordered"
                                {...register("name", {

                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    pattern: {
                                        value: /^([^0-9]*)$/,
                                        message: 'No number allow in name'
                                    }

                                })} />

                            <label className="label">

                                {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-warning">{errors.name.message}</span>}

                            </label>
                        </div>


                        {/* for email */}
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>


                            <input
                                type='email'
                                placeholder='Your email'
                                class="input input-bordered"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                                        message: 'Email is not correct'
                                    }
                                })} />



                            <label className="label">

                                {errors.email?.type === 'required' && <span className="label-text-alt text-warning">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-warning">{errors.email.message}</span>}

                            </label>

                        </div>


                        {/* for password */}

                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>


                            <input
                                type='password'
                                placeholder='password'
                                class="input input-bordered"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'set a password'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Use minimum 6 digit'
                                    }
                                })} />



                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-warning">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-warning">{errors.password.message}</span>}

                            </label>

                        </div>

                        <div className="form-control mt-6">

                            <input className="btn btn-primary uppercase text-white" type="submit" value='Register' />

                        </div>

                    </form>

                    <p className='text-s text-center'>Already have an account ? <Link to='/login' className='text-primary'>login</Link></p>

                </div>


            </div>












        </div>

    );
};

export default Register;