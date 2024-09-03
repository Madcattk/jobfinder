"use client"
import React from 'react'
import { InputBox, InputSelect, ButtonText } from '@components/inputs'
import { useState, useEffect } from "react";

const page = () => {
    const [form, setForm] = useState({});
    const onChange = (update) => setForm({ ...form, ...update })
  return (
    <div className='w-full p-5 flex flex-col justify-start md:px-[100px] lg:px-[200px] xl:px-[250px]'>
        <div className='w-full h-[200px] bg-lightblue rounded-xl flex justify-end items-start p-3'>
            <ButtonText placeholder='Apply' classBox='w-[100px]' color='bg-red-600 hover:text-red-600'/>
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
        <ButtonText placeholder='Apply' classBox='w-full flex justify-end py-10' classInput='w-[100px]' color='bg-red-600 hover:text-red-600'/>
    </div>
  )
}

export default page