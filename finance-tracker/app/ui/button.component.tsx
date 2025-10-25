import { ButtonProps } from "../../interface/interfaces";

export default function Button({ name, heightCS, widthCS, onClick }: ButtonProps) {
  return (
    <button className="bg-black text-white font-bold rounded-md text-center my-2 mt-0" onClick={onClick} style={{ height: heightCS, width: widthCS }}>
      {name}
    </button>
  )
}