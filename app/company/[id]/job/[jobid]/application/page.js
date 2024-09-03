"use client"
import React from 'react'
import { InputBox, ButtonText, InputSelect, InputTextArea } from '@components/inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const page = () => {
    const [form, setForm] = useState({})
    const [education, setEducation] = useState(false)
    const [experience, setExperience] = useState(false)
    const [certification, setCertification] = useState(false)
    const onChange = (update) => setForm({ ...form, ...update })
  return (
    <div className='w-full p-5 flex flex-col justify-start md:px-[100px] lg:px-[200px] xl:px-[250px]'>
        <div className='font-bold pb-5 text-3xl'>Application</div>
        <div className='flex flex-col gap-5'>      
            <div className='flex lg:flex-row flex-col gap-5'>
                <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Firstname'/>
                <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Lastname'/>
            </div>
            <div className='flex lg:flex-row flex-col gap-5'>
                <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Email'/>
                <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Phone Number'/>
            </div>
            <div className='font-bold text-3xl flex gap-3'>
                <span>Education</span>
                <span
                onClick={() => setEducation(!education)}
                className='w-10 h-10 border-[3px] rounded-md flex_center cursor-pointer'>
                    <FontAwesomeIcon icon={faPlus} size='xs' color='lightgray'/>
                </span>
            </div>
            {education && <div className='flex flex-col gap-5 shadow lg:w-fit min-w-fit p-5 rounded-xl'>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputSelect classInput='sm:w-[400px] w-[300px]' placeholder='Degree'/>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Major'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Institution'/>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='GPA'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Start Date'/>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='End Date'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 justify-end items-end'>
                    <ButtonText placeholder='Add' classInput='w-[100px]'/>
                </div>
            </div>}
            <div className='flex flex-col border-2 sm:w-[600px] w-full p-5 rounded-xl'>
                <div>Institustion</div>
                <div>Degree</div>
                <div>GPA</div>
                <div>Date 2020-2024</div>
            </div>
            <div className='font-bold text-3xl flex gap-3'>
                <span>Experience</span>
                <span
                onClick={() => setExperience(!experience)}
                className='w-10 h-10 border-[3px] rounded-md flex_center cursor-pointer'>
                    <FontAwesomeIcon icon={faPlus} size='xs' color='lightgray'/>
                </span>
            </div>
            {experience && <div className='flex flex-col gap-5 shadow lg:w-fit min-w-fit p-5 rounded-xl'>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputSelect classInput='sm:w-[400px] w-[300px]' placeholder='Company'/>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Position'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Start Date'/>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='End Date'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputTextArea rows={4} classBox='w-full' placeholder='Description'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 justify-end items-end'>
                    <ButtonText placeholder='Add' classInput='w-[100px]'/>
                </div>
            </div>}
            <div className='flex flex-col border-2 sm:w-[600px] w-full p-5 rounded-xl'>
                <div>Company</div>
                <div>Position</div>
                <div>Date</div>
                <div>Description</div>
            </div>
            <div className='font-bold text-3xl flex gap-3'>
                <span>Certification</span>
                <span
                onClick={() => setCertification(!certification)}
                className='w-10 h-10 border-[3px] rounded-md flex_center cursor-pointer'>
                    <FontAwesomeIcon icon={faPlus} size='xs' color='lightgray'/>
                </span>
            </div>
            {certification && <div className='flex flex-col gap-5 shadow lg:w-fit min-w-fit p-5 rounded-xl'>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputSelect classInput='sm:w-[400px] w-[300px]' placeholder='Certification Name'/>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Organization'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Issue Date'/>
                    <InputBox classInput='sm:w-[400px] w-[300px]' placeholder='Expired Date'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <InputTextArea rows={4} classBox='w-full' placeholder='Description'/>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 justify-end items-end'>
                    <ButtonText placeholder='Add' classInput='w-[100px]'/>
                </div>
            </div>}
            <div className='flex flex-col border-2 sm:w-[600px] w-full p-5 rounded-xl'>
                <div>Certification Name</div>
                <div>Organization</div>
                <div>Date</div>
                <div>Description</div>
            </div>
            <div className='font-bold text-3xl'>Resume</div>
            <div className='font-bold text-3xl'>Cover Letter</div>
            <ButtonText placeholder='Submit' classBox='w-full flex lg:justify-center justify-end' classInput='w-[110px]'/>
        </div>
    </div>
  )
}

export default page