import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors },} = useForm();
    
      const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
                console.log(loggedUser);
                alert("Create User SuccessFully!")
                navigate("/");
        })
        .catch(error => {
            console.log(error);
        })
      }

    return (
        <div className='bg-[#F2F2F2]'>
            <div className='max-w-sm md:max-w-xl mx-auto'>
            <div className='py-16'>
                <div className='text-center'>
                <h2 className='text-3xl font-medium'>Register with your account?</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='p-3 w-full mb-5 mt-12 border-2 outline-none' placeholder="Name" type='text' {...register("name")} />
                <input className='p-3 w-full mb-5 border-2 outline-none' placeholder="Email" type='email' {...register("email")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className='p-3 w-full border-2 mb-5 outline-none' placeholder='Password' type='password' {...register("password", { required: true })} />
                <input className='p-3 w-full border-2 outline-none' placeholder='Repeat Password' type='password' {...register("password")} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}
                <input className='w-full mt-6 bg-[#ffb606] py-3 cursor-pointer font-semibold text-white' type="submit" value="Register Now" />
                </form>
                <p className='pt-10 text-center'>Already have a account? <Link to={"/login"} className='text-blue-700'>Login now</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Register;