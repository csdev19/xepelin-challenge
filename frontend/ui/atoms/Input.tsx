import clsx from "clsx";
import { FunctionComponent, HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  placeholder: string;
  className?: string;
}

const Input: FunctionComponent<InputProps> = ({ type, name, id, placeholder, className, ...props }) => {
  const defaultClassNames = 'w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500';
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={clsx(defaultClassNames, className)}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default Input;