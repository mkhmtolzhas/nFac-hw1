import React from 'react'
import Link from "next/link"
import Image from 'next/image'

const Card = (props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950 dark:text-white">
        <Link href="#" className="block" prefetch={false}>
          <Image
            src="https://static.tildacdn.pro/tild3039-3932-4433-b533-613365646663/722bab55-4a08-4e09-a.png"
            alt="Blog Post Image"
            width={600}
            height={340}
            className="w-full h-48 object-cover"
            
          />
        </Link>
        <div className="p-4">
          <div className="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{props.date}</span>
            <span className="mx-2">·</span>
            <UserIcon className="w-4 h-4 mr-1" />
            <span>{props.mentor}</span>
          </div>
          <Link href="#" className="block" prefetch={false}>
            <h3 className="text-xl font-semibold mb-2 hover:text-primary dark:hover:text-primary">
              {props.title}
            </h3>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
            {props.description}
          </p>
        </div>
      </div>
  )
}
function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }

export default Card