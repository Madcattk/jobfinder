import React from 'react'
import { ButtonText, InputBox } from '@components/inputs'

const page = () => {
  return (
    <div className="w-full p-5 flex justify-center md:px-[100px] lg:px-[200px] xl:px-[250px]">
        <div className='rounded-xl shadow p-5 flex flex-col gap-3'>
            <div className='font-bold pb-5 text-3xl text-center'>Login</div>
            <InputBox placeholder='Email' classInput='md:w-[400px] w-full' />
            <InputBox placeholder='Password' classInput='md:w-[400px] w-full' />
            <ButtonText placeholder='Login' classBox='w-full flex justify-center' classInput='w-full'/>
            <span className='w-full text-right cursor-pointer text-xs'>Forgot password?</span>
            <ButtonText placeholder='Register' classBox='w-full flex justify-center pt-3 border-t' classInput='w-full'/>
        </div>
    </div>
  )
}

export default page