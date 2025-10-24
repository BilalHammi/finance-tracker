import Image from "next/image";
import Link from 'next/link';
import logoImg from '../../public/logo-mobile.png'
import LoginForm from "../ui/login.component";

export default function Login() {
  return (
    <div className="flex items-center justify-center mobiel-container h-full">
       <div className="insidde-mobiel-container">
            <Image 
            src={logoImg}
            alt='Logo'
            className='max-[500px]:w-[50px] max-[500px]:h-[50px] max-[500px]:mt-3'
            />
            <h1 className="font-bold text-black max-[500px]:my-5">Welcome Back</h1>
            <div>
              <LoginForm />
            </div>
            <div className="flex flex-row max-[500px]:text-[12px]">
              <p className="text-gray-400 mr-2">You dont have an Account?</p><Link href="/register" className="text-black">Register Here!</Link>
            </div>
        </div>
    </div>
  );
}
