"use client";
import { useState, useRef } from "react";

export const InputBox = ({ value = "", onChange, classBox = "", classInput = "", placeholder = "", number = null, password = null }) => {
    return (
        <div className={`${classBox}`}>
            <input
                className={`${classInput} rounded-xl px-2 py-[13px] outline-none w-full text-black border-2`}
                type={password ? 'password' : 'text'}
                value={value}
                onChange={(e) => onChange ? onChange(number ? e.target.value.replace(/[^0-9]/g, '') : e.target.value) : {}}
                placeholder={placeholder}
            />
        </div>
    );
};

export const InputTextArea = ({ value = "", onChange, classBox = "", placeholder = "", number = null, cols, rows }) => {
    return (
        <div className={`${classBox}`}>
            <textarea
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                className={`border-2 rounded-xl px-2 py-[13px] outline-none w-full text-black`}
                onChange={(e) => onChange ? onChange(number ? e.target.value.replace(/[^0-9]/g, '') : e.target.value) : {}}
                value={value}
            />
        </div>
    );
};

export const InputSelect = ({ value = "", onChange, classInput = "", classBox = "", placeholder = "", options = [] }) => {
    return (
        <div className={`${classBox} cursor-pointer`}>
            <select value={value} onChange={(e) => onChange ? onChange(e.target.value) : {}} className={`${classInput} cursor-pointer rounded-xl border-2 px-2 py-[14px] outline-none w-full ${value ? 'text-black': 'text-gray-400 focus:text-black '}`}>
                {placeholder && <option value={null}>{placeholder}</option>}
                {options?.map((option, index) => (
                    <option key={"Option-" + index} value={option?.id}>{option?.name}</option>
                ))}
            </select>
        </div>
    );
};

export const ButtonText = ({ classBox = "", classInput = "", placeholder = "", onClick, color = "bg-lightblue hover:text-lightblue" }) => (
    <div className={`${classBox}`}>
        <button onClick={onClick} type={'submit'} className={`${classInput ? classInput : 'w-full '} ${color} transition-all duration-200 py-[13px] border-2 rounded-xl outline-none c hover:bg-white text-white hover:font-light font-semibold tracking-widest uppercase`}>{placeholder}</button>
    </div>
);