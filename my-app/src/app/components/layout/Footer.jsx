/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mdvR5J0fW5H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 px-[8%] py-[50px]" >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Email
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Phone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-50" prefetch={false}>
                    Address
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 WriteSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}