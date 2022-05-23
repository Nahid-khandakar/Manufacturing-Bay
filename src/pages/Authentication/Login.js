import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {

        const firstName = data.firstName
        const lastName = data.lastName

        console.log(firstName, lastName)

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input {...register("lastName", { required: true })} />
                {errors.lastName && "Last name is required"}

                <input type="submit" value='register' />
            </form>
        </div>
    );
};

export default Login;