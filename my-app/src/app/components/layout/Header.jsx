/**
 * v0 by Vercel.
 * @see https://v0.dev/t/31KVcotomba
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"


export default function Header() {
  return (
    <header className="top-[0] left-[0] w-full px-[8%] py-[30px] flex justify-between items-center bg-gray-900 text-white md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <ion-icon name="planet" size="large"></ion-icon>
            <span className="text-2xl font-bold">WriteSphere</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline text-lg" prefetch={false}>
                Home
            </Link>
            <Link href="#" className="hover:underline text-lg" prefetch={false}>
                Categories
            </Link>
            <Link href="#" className="hover:underline text-lg" prefetch={false}>
                About
            </Link>
            <Link href="#" className="hover:underline text-lg" prefetch={false}>
                Contact
            </Link>
            </nav>
            <div className="hidden md:flex items-center gap-2">
            <input type="search" placeholder="Search..." className="h-8 w-40 rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"/>
            <SearchIcon className="h-5 w-5" />
            </div>
            <button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
            </button>
        </div>
    </header>
  )
}

function SearchIcon(props) {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}