import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  className: string
  onClick: () => void
}

const Button = ({ children, className: classNameProps, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${classNameProps}  `}
    >
      {children}
    </button>
  )
}

export default Button
