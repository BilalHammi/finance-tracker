
import Image from "next/image";
import Link from 'next/link';
import logoImg from '../../public/logo-mobile.png'
import LoginForm from "../ui/login.component";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full mobiel-container tablet-container desktop-container h-full ">
       <div className="insidde-mobiel-container inside-tablet-container bg-white flex justify-start rounded-xl flex-col items-center">
            <Image 
            src={logoImg}
            alt='Logo'
            className='max-[600px]:w-[50px] max-[600px]:h-[50px] max-[600px]:mt-3 min-[601px]:h-[60px] min-[601px]:w-[60px]'
            />
            <h1 className="font-bold text-[20px] text-black my-5">Welcome Back</h1>
            <div>
              <LoginForm />
            </div>
            <div className="flex flex-row max-[600px]:text-[12px]">
              <p className="text-gray-400 mr-2">You dont have an Account?</p><Link href="/register" className="text-black">Register Here!</Link>
            </div>
        </div>
    </div>
  );
}
