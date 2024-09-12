"use client"
import React, { useState } from 'react'
import { ButtonText, InputBox } from '@components/inputs'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons'

const page = () => {
    const router = useRouter();
    const [form, setForm] = useState({});
    const [password, setPassword] = useState(true);
    const onChange = (update) => setForm({ ...form, ...update })
  return (
    <div className="w-full p-5 flex justify-center md:px-[100px] lg:px-[200px] xl:px-[250px]">
        <div className='rounded-xl shadow p-5 flex flex-col gap-3'>
            <div className='font-bold pb-5 text-3xl text-center'>Login</div>
            <InputBox 
            onChange={(email) => onChange({email})} 
            value={form?.email || ''}
            placeholder='Email' classInput='md:w-[400px] w-full' />
            <div className='relative'>
                <InputBox
                onChange={(password) => onChange({password})} 
                value={form?.password || ''}
                password={password ? true : false}
                placeholder='Password' classInput='md:w-[400px] w-full' />
                <FontAwesomeIcon 
                onClick={() => setPassword(!password)}
                icon={password ? faEyeSlash : faEye} 
                className='absolute top-4 right-3 hover:cursor-pointer' size='xl' color='lightgray'/>
            </div>
            <ButtonText
            onClick={() => router.push("/applicant/profile")}
            placeholder='Login' classBox='w-full flex justify-center' classInput='w-full'/>
            <span className='w-full text-right cursor-pointer text-xs hover:underline'>Forgot password?</span>
            <ButtonText
            onClick={() => router.push("/applicant/register")}
            placeholder='Register' classBox='w-full flex justify-center pt-3 border-t' classInput='w-full'/>
        </div>
    </div>
  )
}

export default page