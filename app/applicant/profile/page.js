import { ButtonText } from '@components/inputs'
import React from 'react'

const page = () => {
  return (
    <div className="w-full p-5 flex justify-start md:px-[100px] lg:px-[200px] xl:px-[250px]">
        <div className='flex justify-between gap-3 w-full border-b pb-5'>
            <div className='flex items-end gap-3'>
                <div className='w-32 h-32 bg-lightblue rounded-full'></div>
                <div className='text-3xl font-bold pb-3'>User2423297454955</div>
            </div>
            <ButtonText placeholder='Edit profile' classInput='px-3'/>
        </div>
    </div>
  )
}

export default page