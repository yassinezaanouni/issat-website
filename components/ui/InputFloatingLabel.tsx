import { cn } from "@/lib/utils";
import React, { useId } from "react";

type Props = {
  As?: "input" | "textarea";
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  className?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};
const InputFloatingLabel = ({
  As = "input",
  label,
  name,
  type = "text",
  className,
  onChange,
}: Props) => {
  const id = useId();

  return (
    <div className={cn("relative", className)}>
      <As
        name={name}
        type={type}
        id={id}
        className="focus:border-bg-400 peer block w-full resize-none appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2 font-medium focus:outline-none focus:ring-0"
        placeholder=""
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="absolute top-3 -z-10 origin-[0] -translate-y-5 scale-75 transform text-sm text-slate-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:opacity-50"
      >
        {label}
      </label>
    </div>
  );
};

export default InputFloatingLabel;
