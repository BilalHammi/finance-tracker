"use client"

import { useState } from "react"
import BtnComponent from "../ui/button.component"
import InputComponent from "../ui/input.component"
import EmailIcon from "../../public/email-icon.png"
import PasswordIcon from "../../public/lock-icon.png"
import PasswordDot from "../../public/password-dot.png"
import Image from "next/image";



export default function LoginForm() {
    const [form, setForm] = useState({email: "", password: ""});
    
    
    const handlePasswordClick = () => {
        console.log(form.email, form.password); 
    } 
    
    return (
       <div className="max-[600px]:flex max-[600px]:flex-col">
        <div>
            <div className="flex flex-row mb-2">
                <Image src={EmailIcon} alt="Email icon" className="h-7 w-7"/>
                <p className="ml-1 text-gray-400">Email</p>
            </div>
            <InputComponent widthCS="243px" heightCS="40px"  onChange={(e) => {
                setForm(prev => ({...prev, email: e.target.value}))
            }} state={form.email} typeInput="text" name="John.Doe@example.com"/>
        </div>
        <div>
            <div className="flex flex-row mb-2">
                <Image src={PasswordIcon} alt="Lock icon" className="w-7 h-7"/>
                <p className=" text-gray-400 ml-1">Password</p>
            </div>
            <div className="flex flex-row">
                <Image  src={PasswordDot} alt="Password icon"  onClick={handlePasswordClick} className="w-3 h-3 fixed ml-54 top-[483px]"/>

                <InputComponent widthCS="243px" heightCS="40px" typeInput="password" onChange={(e) => {
                    setForm(prev => ({...prev, password: e.target.value}))
                    
                }} state={form.password} name="**********"/>
            </div>
        </div>
        <BtnComponent name="Login" heightCS="32px" widthCS="245px" onClick={handlePasswordClick}/>
       </div>
    )
}