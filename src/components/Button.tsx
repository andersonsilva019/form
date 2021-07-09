import { ReactNode } from "react"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-blue-700 text-white py-4 px-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
