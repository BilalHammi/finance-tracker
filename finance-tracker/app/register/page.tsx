
import Image from "next/image";
import Link from 'next/link';
import logoImg from '../../public/logo-mobile.png'
import RegisterForm from "../ui/RegisterForm.component";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full h-full">
       <div className="register-container bg-white flex justify-center rounded-xl flex-col items-center mx-10">
            <Image 
            src={logoImg}
            alt='Logo'
            className='max-[600px]:w-[50px] max-[600px]:h-[50px] max-[600px]:mt-3 min-[601px]:h-[60px] min-[601px]:w-[60px]'
            />
            <h1 className="font-bold text-[20px] text-black my-5">Create your account!</h1>
            <div>
              <RegisterForm />
            </div>
            <div className="flex flex-row max-[600px]:text-[12px]">
              <p className="text-gray-400 mr-2">Aleardy have an account?</p><Link href="/login" className="text-black">Click here!</Link>
            </div>
        </div>
    </div>
  );
}
