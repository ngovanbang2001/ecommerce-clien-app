import React from 'react'

type Props = {
  children: React.ReactNode
  index: number
  selectedIndex: number
}

const ContentTab = ({ children, index, selectedIndex }: Props) => {
  return (
    <div
      className={`p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full ${
        selectedIndex === index ? 'block' : 'hidden'
      }`}
    >
      {children}
    </div>
  )
}

export default ContentTab
