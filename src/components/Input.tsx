import { InputHTMLAttributes } from "react"
import { ExclamationIcon } from '@heroicons/react/outline'

type InputProps = {
  label?: string
  labelFor?: string
  className?: string
  fieldRequired?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ fieldRequired = true, label, labelFor = '', error, className, ...props }: InputProps) {

  return (
    <div className="flex flex-col w-full">
      {!!label && (
        <label className="mb-2 text-gray-800 text-sm font-bold" htmlFor={labelFor}>
          {label}
          {!fieldRequired && <span >Optional</span>}
        </label>
      )}
      <div
        className={`rounded-md flex items-center p-2 border-2 ${error ? 'border-red-600' : 'border-gray-300'}  ${className}`}
      >
        <input
          id={labelFor}
          className={`outline-none text-gray-800 border-none w-full`}
          {...props}
        />
        {error && <ExclamationIcon className="h-4 ml-2 text-red-600" />}
      </div>
      <span className="text-red-600">{error}</span>
    </div>
  )
}
