import BtnComponent from "../ui/button.component"
import InputComponent from "../ui/input.component"
import EmailIcon from "../../public/email-icon.png"
import PasswordIcon from "../../public/lock-icon.png"
import PasswordDot from "../../public/password-dot.png"
import Image from "next/image";


export default function loginForm() {
    return (
       <div className="max-[600px]:flex max-[600px]:flex-col">
        <div>
            <div className="flex flex-row mb-2">
                <Image src={EmailIcon} alt="Email icon" className="h-7 w-7"/>
                <p className="ml-1 text-gray-400">Email</p>
            </div>
            <InputComponent widthCS="243px" heightCS="40px" typeInput="text" name="John.Doe@example.com"/>
        </div>
        <div>
            <div className="flex flex-row mb-2">
                <Image src={PasswordIcon} alt="Lock icon" className="w-7 h-7"/>
                <p className=" text-gray-400 ml-1">Password</p>
            </div>
            <div className="flex flex-row">
                <button>
                    <Image  src={PasswordDot} alt="Password icon" className="w-3 h-3 absolute ml-52 mt-3"/>
                </button>

                <InputComponent widthCS="243px" heightCS="40px" typeInput="password" name="**********"/>
            </div>
        </div>
        <BtnComponent name="Login" heightCS="32px" widthCS="245px"/>
       </div>
    )
}