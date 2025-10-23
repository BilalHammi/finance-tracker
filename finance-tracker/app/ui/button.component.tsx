import { ButtonProps } from "../../interface/interfaces";

export default function Button({ name, heightCS, widthCS }: ButtonProps) {
  return (
    <button className="bg-black text-white font-bold rounded-md text-center my-2" style={{ height: heightCS, width: widthCS }}>
      {name}
    </button>
  )
}