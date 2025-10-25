"use client"

import LogoImage from '../../../assets/image.png'
import { useForm } from "react-hook-form";
import { SignupSchema } from '@/app/validations/shema'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type SignupFormData = z.infer<typeof SignupSchema>;

const Register = () => {    

    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({ resolver: zodResolver(SignupSchema)});

    const handleRegister = (data:SignupFormData) =>{
        console.log(data);
        
    }
    return (
        <div className='flex items-center w-full h-full'>
            <div className='w-[45%] h-full'>
                <img src={LogoImage?.src} alt="Web Logo" className='w-full h-[100dvh]' />
            </div>
            <div className='h-full w-[55%] flex flex-col justify-center items-center'>
                <form
                    onSubmit={handleSubmit((data)=>{handleRegister(data)})} 
                    className='h-[full] w-[35%] flex flex-col justify-center items-start gap-6'>

                    <div className="w-full bg-white rounded-lg font-mono">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >Name</label>
                        <input
                            {...register("name")}
                            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            placeholder="Enter name here"
                            type="text"
                            id="name"
                        />
                        {errors?.name && <p className="text-red-500 text-sm">{errors?.name?.message}</p>}
                    </div>

                    <div className="w-full bg-white rounded-lg font-mono">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >Email</label>
                        <input
                            {...register("email")}
                            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            placeholder="Enter email here"
                            type="text"
                            id="email"
                        />
                        {errors?.email && <p className="text-red-500 text-sm">{errors?.email?.message}</p>}
                    </div>

                    <div className="w-full bg-white rounded-lg font-mono">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >Password</label>
                        <input
                            {...register("password")}
                            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            placeholder="Enter text here"
                            type="text"
                            id="password"
                        />
                        {errors?.password && <p className="text-red-500 text-sm">{errors?.password?.message}</p>}
                    </div>


                    <div className=' w-full flex justify-end gap-2'>
                        <span className='text-grey'>already have an account?</span>
                        <span className='text-blue-400 font-[500] cursor-pointer'>Login</span>
                    </div>

                    <button 
                         type="submit"
                        className= "w-full flex justify-center items-center text-white text-[16px] rounded-md cursor-pointer select-none bg-linear-to-b from-[#37AEE2] to-[#1E96C8] py-2 px-4 hover:from-[#1D95C9] hover:to-[#17759C]"
                    >Register</button>
                    
                </form>
            </div>

        </div>
    )
}

export default Register