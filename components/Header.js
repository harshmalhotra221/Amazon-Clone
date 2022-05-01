import Image from "next/image"
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  HomeIcon,
  UserIcon,
  ClipboardListIcon
} from "@heroicons/react/outline"
import { ArrowCircleUpIcon } from "@heroicons/react/solid"
import { CheckIcon } from "@heroicons/react/solid"
import SideCart from "./SideCart"
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/router"
import checkout from "../pages/checkout"
import { useSelector } from "react-redux"
import { selectItems, selectTotalItems } from "../slices/basketSlice"

function Header({setShowCart, showCart, products}) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const selectTotalItem = useSelector(selectTotalItems)

  return (
    <header className="sticky top-0 z-50 ">
    {/* // <header> */}
      <div className="hidden lg:flex items-center md:space-x-10 p-1 bg-gray-600 text-white text-sm scroll-smooth">
        <div className="flex ml-20 space-x-20 md:10 font-semibold">
          <p className="link flex"><CheckIcon className="w-5 h-5 text-green-500"/>Free shipping</p>
          <p className="link flex"><CheckIcon className="w-5 h-5 text-green-500"/>Basic artwork check included</p>
          <p className="link flex"><CheckIcon className="w-5 h-5 text-green-500"/>Independent buyer protection</p>
          <p className="link flex"><CheckIcon className="w-5 h-5 text-green-500"/>Buy on account</p>
          <p className="link flex"><CheckIcon className="w-5 h-5 text-green-500"/>Consult a print professional</p>
        </div>
      </div>

      <div className="header sticky top-0 z-50" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        {/* Top nav */}
        <div className="m flex items-center p-1 bg-amazon_blue flex-grow">
        <div className="mr-2 ml-3.5 mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image 
              src="https://links.papareact.com/f90"
              width={180}
              height={60}
              objectFit="contain"
            />
          {/* <h1 className="ml-10 font-bold">Our Products</h1> */}
          </div>

          {/* Search bar */}
          <div className="hidden relative items-center flex-grow cursor-pointer rounded-md h-10 bg-yellow-400 sm:flex hover:bg-yellow-500">
            <div className="absolute pointer-events-none">
            </div>
            <input 
              className="p-2 px-5 h-full width-6 flex-grow rounded flex-shrink rounded-l-md focus:outline-none"
              type="text" 
              placeholder="Search anything you need..."
            />
            <SearchIcon className="h-12 p-4"/>
          </div>

          {/* Right Section of Navbar */}
          <div className=" text-white flex items-center text-xs space-x-7 mx-6 whitespace-nowrap">
            <div onClick={() => router.push('/')} className="cursor-pointer link scroll-smooth">
              <p className="flex text-sm"><HomeIcon className="hidden sm:flex h-4" />Home</p>
            </div>

            <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
              <p className="flex hover:underline"><UserIcon className="hidden sm:flex h-4 ml--5 mr--2" />
                {session ? `Hello, ${session.user.name}` : "Hello, Sign In"}
              </p>
              <p className="font-extrabold md:ml-4 lg:ml-4 md:text-sm sm:text-xs sm:ml-4">Account & Lists</p>
            </div>

            <div onClick={() => router.push('/orders')} className="cursor-pointer link">
              <p className="flex"><ClipboardListIcon className="hidden sm:flex h-4 ml--5 mr--2" />Returns</p>
              <p className="font-extrabold md:ml-4 lg:ml-4 md:text-sm sm:text-xs sm:ml-4">& Orders</p>
            </div>

            <div title="Please Click MEEEE" onClick={() => router.push('/checkout')} className="relative cursor-pointer link flex items-center scroll-smooth">
              <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-white font-extrabold">
                {selectTotalItem}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Cart
              </p>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div onClick={() => router.push('/product')} className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
          <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1"/>
            All
            <ArrowCircleUpIcon className="h-6 mr-1 text-yellow-400" />
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy again</p>
          <p className="link hidden lg:inline-flex">Shopping Toolkit</p>
          <p className="link hidden lg:inline-flex">Mens & Womens</p>

        </div>
        </div>
        {showCart && <SideCart setShowCart={setShowCart} />}
    </header>
  )
}

export default Header