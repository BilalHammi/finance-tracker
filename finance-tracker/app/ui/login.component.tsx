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
    const [passwordType, setPasswordType] = useState<"password" | "text">("password");

    
    
    const handlePasswordClick = () => {
        setPasswordType(perv => perv === "password" ? "text" : "password")
    } 

    const handleForm = () => {
    console.log("I am an Form!");
    } 

    return (
        <form>
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
                    <div className="flex flex-row relative">
                        <Image  src={PasswordDot} alt="Password icon"  onClick={handlePasswordClick} className="w-3 h-3 absolute ml-54 mt-3"/>

                        <InputComponent widthCS="243px" heightCS="40px" typeInput={passwordType} onChange={(e) => {
                            setForm(prev => ({...prev, password: e.target.value}))
                            
                        }} state={form.password} name="**********"/>
                    </div>
                </div>
                <BtnComponent name="Login" heightCS="32px" widthCS="245px" onClick={handleForm}/>
            </div>
       </form>
    )
}