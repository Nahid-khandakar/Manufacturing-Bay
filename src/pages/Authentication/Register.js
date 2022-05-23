import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {

        const firstName = data.firstName
        const lastName = data.lastName

        console.log(firstName, lastName)

    }

    return (

        <div className="bg-base-100">

            <div className="text-center my-8">
                <h1 className="text-4xl font-bold text-primary">Login now!</h1>
            </div>

            {/*card body */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-14">


                <div className="card-body">



                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("firstName", { required: true })} class="input w-full input-bordered" />
                            {errors.firstName?.type === 'required' && "First name is required"}
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>


                            <input {...register("lastName", { required: true })} class="input w-full input-bordered" />
                            {errors.lastName && "Last name is required"}


                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value='Register' />

                        </div>

                    </form>



                </div>


            </div>












        </div>

    );
};

export default Register;