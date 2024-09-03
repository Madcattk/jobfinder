"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const nav = ({children}) => {
    const [menu, setMenu] = useState(false);
    const [tab, setTab] = useState(0);
    const router = useRouter();
    useEffect(() => {
        if(tab === 1) router.push('/search');
        else if(tab === 2) router.push('/');
    },[tab])

    return (
        <React.Fragment>
            <div className="w-full py-3 px-5 flex justify-between gap-4 md:px-[100px] lg:px-[200px] xl:px-[250px]">
                <div className="flex_center gap-4 sm:w-fit w-[240px]">
                <span 
                onClick={() => setTab(1)} 
                className="font-semibold text-[20px] cursor-pointer">
                    JobFinder
                </span>
                <div 
                onClick={() => setTab(1)}
                onMouseOver={() => setMenu(false)} 
                className={`${tab === 1 ? 'underline' : ''} cursor-pointer hover:underline invisible md:visible`}>
                    Job Search
                </div>
                <div 
                onClick={() => setTab(2)}
                onMouseOver={() => setMenu(false)} 
                className={`${tab === 2 ? 'underline' : ''} cursor-pointer hover:underline invisible md:visible`}>
                    Explore Companies
                </div>
                </div>
                <div className="flex_center gap-4">
                <div className="group relative invisible md:visible">
                    <div onMouseOver={() => setMenu(false)} className="menu-hover cursor-pointer">Login</div>
                    <div className="absolute left-0 top-6 bg-white border rounded z-50 invisible group-hover:visible flex flex-col items-center">
                    <div className="p-3 hover:bg-lightblue hover:rounded-t hover:text-white cursor-pointer transition-colors duration-200">
                        Applicant
                    </div>
                    <div className="p-3 hover:bg-lightblue hover:rounded-b hover:text-white cursor-pointer transition-colors duration-200">
                        Employer
                    </div>
                    </div>
                </div>
                <div
                    onClick={() => setMenu(!menu)}
                    className="visible md:invisible cursor-pointer hover:underline"
                >
                    Menu
                </div>
                </div>
            </div>
            {menu && (
                <div className="w-full flex flex-col gap-5 border py-5 px-10">
                <div
                onClick={() => setTab(1)}
                className="cursor-pointer hover:underline">Job Search</div>
                <div 
                onClick={() => setTab(2)}
                className="cursor-pointer hover:underline">
                    Explore Companies
                </div>
                <div className="cursor-pointer hover:underline">Applicant</div>
                <div className="cursor-pointer hover:underline">Employer</div>
                </div>
            )}
            {children}
        </React.Fragment>
    )
}

export default nav
