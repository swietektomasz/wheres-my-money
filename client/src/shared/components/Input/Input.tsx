import { FormikErrors } from "formik";
import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  type: string;
  errors: FormikErrors<{ [key: string]: string }>;
  label?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent) => void;
}

export function Input({ placeholder, name, label, onChange, type, errors }: InputProps) {
  return (
    <label htmlFor={name} className="flex flex-col text-sm font-light text-gray-700 select-none">
      {label}
      <input
        className={`w-full h-8 border-2 ${errors[name] ? "border-red-300" : "border-gray-300"} rounded-sm`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {errors[name] && errors[name]}
    </label>
  );
}
