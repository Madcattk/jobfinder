"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const [form, setForm] = useState({});
    const onChange = (update) => setForm({ ...form, ...update })
  return (
    <div className="w-full p-5 flex flex-col justify-start gap-3 md:px-[100px] lg:px-[200px] xl:px-[250px]">
        <div className='relative pb-20 w-full h-fit'>
            <div className='z-10 w-full bg-lightblue h-[250px] rounded-xl absolute'></div>
            <div className='z-20 w-40 h-40 bg-blue rounded-full absolute top-[120px] left-8'></div>
        </div>
        <div className='relative z-30 top-[200px]'>
            <div className='text-[30px] font-bold'>Company Name</div>
            <div className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus similique esse aspernatur laudantium accusantium aut dolorum nostrum repudiandae, aperiam ab rem iste quam labore inventore delectus reprehenderit cupiditate quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut labore consequatur dignissimos reprehenderit deleniti voluptatibus! Est atque quaerat sit quibusdam ratione mollitia tempora? Ipsa similique quos voluptas? Consequatur, sunt.</div>
            <div className=''>Address Lorem ipsum dolor sit, amet consecteturae e omnis porro rerum.</div>
            <div className=''>Email</div>
            <div className=''>Phone</div>
            <div className='font-semibold text-xl py-3'>Job Position Opening</div>
            <div className='flex flex-col gap-3'>
                    {[1,2,3,4,5,6,7,8,9,10].map((item, index)=>{
                        return <div 
                        key={index} 
                        onClick={() => {
                            setForm({...form, job: item});
                            router.push(`/company/${index}/job/${index}`);
                        }}
                        className='w-fit p-5 rounded-xl border flex gap-2 max-w-[500px] cursor-pointer hover:shadow'>
                        <div className='p-10 bg-lightblue rounded-lg h-10'></div>
                        <div>
                            <div className='font-semibold'>Company Name</div>
                            <div className='font-semibold'>Job Position</div>
                            <div className='text-gray-400 text-sm'>Address Lorem ipsum dolor sit amet consectetur adipisicing elit. ggghghghghghg</div>
                            <div className='text-gray-400 text-sm'>Address</div>
                            <div className='text-gray-400 text-sm'>Address</div>
                        </div>
                    </div>
                    })}
                </div>
        </div>
    </div>
  )
}

export default page