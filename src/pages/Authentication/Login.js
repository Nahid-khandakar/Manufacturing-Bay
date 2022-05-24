import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hook/useToken';
import Loading from '../Shared/Loading'


const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //log in with email and pass
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //login with google 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);



    //for form
    const { register, formState: { errors }, handleSubmit } = useForm();

    //set token & if token find
    const [token] = useToken(user || googleUser)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    //error and loading
    let setError;

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        setError = <p>{error?.message || googleError?.message}</p>
    }

    //click register button
    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)

    }

    const handleForgetPassword = (data) => {
        console.log(data.email)
    }



    return (
        <div className="bg-base-100">

            <div className="text-center my-5">
                <h1 className="text-4xl font-bold text-primary">Login</h1>
            </div>

            {/*card body */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-8">


                <div className="card-body">



                    <form onSubmit={handleSubmit(onSubmit)}>



                        {/* for email */}
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>


                            <input
                                type='email'
                                placeholder='Your email'
                                className="input input-bordered"

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
                                className="input input-bordered"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
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


                        {setError}
                        <div className="form-control mt-6">

                            <input className="btn btn-primary uppercase text-white" type="submit" value='login' />

                        </div>

                    </form>

                    <p className='text-s text-center'>New in manufacturing bay ? <Link to='/register' className='text-primary'>Register</Link></p>


                    <button
                        onClick={handleForgetPassword}
                        className='btn btn-ghost text-amber-600 btn-xs'>or Forgot password?
                    </button>


                    <div className="divider">OR</div>


                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary">
                        Continue with google
                    </button>


                </div>
            </div>



        </div>
    );
};

export default Login;