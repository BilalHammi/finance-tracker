import { ButtonProps } from "../../interface/interfaces";

export default function Button({ name, heightCS, widthCS }: ButtonProps) {
  return (
    <button className="bg-black text-white font-bold rounded-lg text-center" style={{ height: heightCS, width: widthCS }}>
      {name}
    </button>
  )
}