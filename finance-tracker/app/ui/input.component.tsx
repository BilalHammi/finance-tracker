import { ButtonProps } from "../../interface/interfaces";

export default function Input({ name, heightCS, widthCS, typeInput }: ButtonProps) {
  return (
    <input type={typeInput} placeholder={name} style={{ height: heightCS, width: widthCS}} className="rounded-md pl-6 mb-10 border-gray-400 border" required></input>
  )
}