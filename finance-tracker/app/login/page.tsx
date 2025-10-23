import Image from "next/image";
import logoImg from '../../public/logo-mobile.png'


export default function Login() {
  return (
    <div className="max-[450px]: flex max-[450px]:items-center max-[450px]: mx-[40px] max-[450px]:min-w-[400px]  max-[450px]:shrink h-full">
       <div className="max-[450px]:w-[345px] max-[450px]:h-[458px] max-[450px]:bg-white  max-[450px]:flex max-[450px]:justify-start rounded-xl max-[450px]:flex-col max-[450px]:items-center max-[450px]:pt-10">
            <Image 
            src={logoImg}
            alt='Logo'
            className='max-[450px]:w-[50px] max-[450px]:h-[50px]'
            />
            <h1 className="font-bold text-black max-[450px]:mt-4">Welcome Back</h1>
            <div>
            </div>
        </div>
    </div>
  );
}
