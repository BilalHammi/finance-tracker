import BtnComponent from "../ui/button.component"
import InputComponent from "../ui/input.component"
import EmailIcon from "../../public/email-icon.png"
import PasswordIcon from "../../public/lock-icon.png"
import Image from "next/image";


export default function loginForm() {
    return (
       <div className="max-[450px]:flex max-[450px]:flex-col">
        <div>
            <div className="max-[450px]:flex max-[450px]:flex-row">
                <Image src={EmailIcon} alt="Email icoon" className="w-6 h-6"/>
                <p className="max-[450px]:ml-1 max-[450px]:mb-2 max-[450px]:text-gray-400">Email</p>
            </div>
            <InputComponent widthCS="243px" heightCS="40px" typeInput="text" name="John.Doe@example.com"/>
        </div>
        <div>
            <div className="max-[450px]:flex max-[450px]:flex-row">
                <Image src={PasswordIcon} alt="Lock icoon" className="w-6 h-6"/>
                <p className="max-[450px]:ml-1 max-[450px]:mb-2 max-[450px]:text-gray-400">Password</p>
            </div>
            <InputComponent widthCS="243px" heightCS="40px" typeInput="password" name="**********"/>
        </div>
        <BtnComponent name="Login" heightCS="32px" widthCS="245px"/>
       </div>
    )
}