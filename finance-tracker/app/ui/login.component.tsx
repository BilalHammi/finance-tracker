import BtnComponent from "../ui/button.component"
import InputComponent from "../ui/input.component"
import EmailIcon from "../../public/email-icon.png"
import PasswordIcon from "../../public/lock-icon.png"
import PasswordDot from "../../public/password-dot.png"
import Image from "next/image";


export default function loginForm() {
    return (
       <div className="max-[500px]:flex max-[500px]:flex-col">
        <div>
            <div className="max-[500px]:flex max-[500px]:flex-row">
                <Image src={EmailIcon} alt="Email icon" className="w-6 h-6"/>
                <p className="max-[500px]:ml-1 max-[500px]:mb-2 max-[500px]:text-gray-400">Email</p>
            </div>
            <InputComponent widthCS="243px" heightCS="40px" typeInput="text" name="John.Doe@example.com"/>
        </div>
        <div>
            <div className="max-[500px]:flex max-[500px]:flex-row">
                <Image src={PasswordIcon} alt="Lock icon" className="w-6 h-6"/>
                <p className="max-[500px]:ml-1 max-[500px]:mb-2 max-[500px]:text-gray-400">Password</p>
            </div>
            <div className="flex flex-row">
                <Image  src={PasswordDot} alt="Password icon" className="w-3 h-3 absolute ml-52 mt-3"/>
                <button>
                    <InputComponent widthCS="243px" heightCS="40px" typeInput="password" name="**********"/>
                </button>
            </div>
        </div>
        <BtnComponent name="Login" heightCS="32px" widthCS="245px"/>
       </div>
    )
}