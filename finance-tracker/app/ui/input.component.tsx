import { ButtonProps } from "../../interface/interfaces";

export default function Input({ name, heightCS, widthCS, typeInput, state,  onChange}: ButtonProps) {
  return (
    <input type={typeInput} placeholder={name} value={state} onChange={onChange} style={{ height: heightCS, width: widthCS}} className="rounded-md pl-6 mb-10 border-gray-400 border" required></input>
  )
}