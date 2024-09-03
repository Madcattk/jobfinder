"use client"
import React from 'react'
import { InputBox, InputSelect, ButtonText } from '@components/inputs'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const [form, setForm] = useState({});
    const onChange = (update) => setForm({ ...form, ...update })
    return (
        <React.Fragment>
            <div className="w-full py-10 h-fit bg-lightblue flex flex-col justify-center items-center px-20">
                <div>
                    <span className='text-lg font-semibold text-white'>Job Search</span>
                    <div className='flex lg:flex-row flex-col gap-3 pt-2'>
                        <InputBox 
                        onChange={(job_name) => onChange({job_name})} 
                        value={form?.job_name || ''} 
                        classInput='md:w-[400px] w-[300px]' 
                        placeholder='Job Name'/>
                        <InputSelect 
                        onChange={(job_type) => onChange({ job_type })} 
                        options={[{ id: 0, name: 'Information Technology' }, { id: 1, name: 'Marketing' }]} 
                        value={form?.job_type || ''} 
                        classInput='md:w-[400px] w-[300px]' 
                        placeholder='Job Type'/>
                        <div className='w-full flex justify-end'><ButtonText placeholder='Search' classBox='w-[100px]'/></div>
                    </div>
                </div>
            </div>
            <div className="w-full p-5 flex justify-start gap-3 md:px-[100px] lg:px-[200px] xl:px-[250px]">
                <div className='flex flex-col gap-3'>
                    {[1,2,3,4,5,6,7,8,9,10].map((item, index)=>{
                        return <div 
                        key={index} 
                        onClick={() => setForm({...form, job: item})}
                        className='w-fit p-5 rounded-xl border flex gap-2 max-w-[500px] cursor-pointer hover:shadow'>
                        <div 
                        onClick={() => router.push(`/company/${index}`)}
                        className='p-10 bg-lightblue rounded-lg h-10'></div>
                        <div>
                            <div 
                            onClick={() => router.push(`/company/${index}`)}
                            className='font-semibold hover:underline'>Company Name</div>
                            <div className='font-semibold'>Job Position</div>
                            <div className='text-gray-400 text-sm'>Address Lorem ipsum dolor sit amet consectetur adipisicing elit. ggghghghghghg</div>
                            <div className='text-gray-400 text-sm'>Address</div>
                            <div className='text-gray-400 text-sm'>Address</div>
                        </div>
                    </div>
                    })}
                </div>
                <div className='w-full border rounded-xl min-h-screen p-5'>
                    <div className='w-full h-[200px] bg-lightblue rounded-xl flex justify-end items-start p-3'>
                        <ButtonText 
                        onClick={() => router.push(`/company/${1}/job/${1}/application`)}  
                        placeholder='Apply' 
                        classBox='w-[100px]' 
                        color='bg-red-600 hover:text-red-600'/>
                    </div>
                    <div className='font-bold py-2 text-3xl'>Job Position {form?.job || '-'}</div>
                    <div className='text-lg'>Company Name</div>
                    <div className='text-gray-400'>Address</div>
                    <div className='text-gray-400'>Salary</div>
                    <div className='text-gray-400'>DFffdfdf</div>
                    <div className='pt-5 pb-2 font-semibold'>Job Requirement</div>
                    <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non corrupti molestiae! Vero cumque cum odit! Sit eos minima sequi eligendi accusantium aperiam minus, a, amet corporis provident odit. Quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quis perspiciatis magni provident ipsa ipsum in! Maiores, suscipit! Dolorem ut quod dolores explicabo nisi deserunt. Hic nemo cumque officiis illum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quos voluptatum eos, eveniet unde dolorem numquam, adipisci odit at eaque fuga maiores obcaecati officia illum? Placeat atque magni voluptas laboriosam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique veritatis nisi voluptate, necessitatibus at explicabo mollitia. Nihil, delectus dolores quae perspiciatis accusantium voluptas asperiores possimus quo officia labore? Accusantium, doloremque?</div>
                    <div className='pt-5 pb-2 font-semibold'>Job Qualification</div>
                    <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non corrupti molestiae! Vero cumque cum odit! Sit eos minima sequi eligendi accusantium aperiam minus, a, amet corporis provident odit. Quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quis perspiciatis magni provident ipsa ipsum in! Maiores, suscipit! Dolorem ut quod dolores explicabo nisi deserunt. Hic nemo cumque officiis illum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quos voluptatum eos, eveniet unde dolorem numquam, adipisci odit at eaque fuga maiores obcaecati officia illum? Placeat atque magni voluptas laboriosam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique veritatis nisi voluptate, necessitatibus at explicabo mollitia. Nihil, delectus dolores quae perspiciatis accusantium voluptas asperiores possimus quo officia labore? Accusantium, doloremque?</div>
                    <ButtonText 
                    onClick={() => router.push(`/company/${1}/job/${1}/application`)} 
                    placeholder='Apply' 
                    classBox='w-full flex justify-end py-10' 
                    classInput='w-[100px]' 
                    color='bg-red-600 hover:text-red-600'/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default page