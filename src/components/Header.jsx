import Logo from '../images/logo.svg';

import { BsChevronDown, BsPerson, BsPersonPlus } from 'react-icons/bs';
import { GrCart } from 'react-icons/gr';
import { MdStore, MdReplay } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';

// header bottom icons
import { HiOutlinePhoto, HiOutlineNewspaper, HiOutlineTruck } from 'react-icons/hi2';
import { RiBatteryShareFill } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';

export default function Header() {
  return (
    <header>
      <div className="header-top grid grid-cols-10 content-center place-items-center justify-items-center grid-flow-col py-6">
        <div className="logo justify-self-start pl-8">
          <img src={Logo} alt="" />
        </div>
        <nav className="col-span-4 justify-self-start">
          <ul>
            <li className="">
              <a className="text-2xl hover:text-red-500 transition-all duration-300" href="#">
                Prescriptions <BsChevronDown className="inline-block text-2xl" />
              </a>
            </li>
            <li className=" px-7">
              <a href="#" className="text-2xl hover:text-red-500 transition-all duration-300">
                Health <BsChevronDown className="inline-block" />
              </a>
            </li>
            <li className="">
              <a href="#" className="text-2xl hover:text-red-500 transition-all duration-300">
                Shop <BsChevronDown className="inline-block" />
              </a>
            </li>
            <li className=" px-7">
              <a href="#" className="text-2xl hover:text-red-500 transition-all duration-300">
                Savings & Memberships <BsChevronDown className="inline-block" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="relative search col-span-4 place-self-stretch justify-items-center">
          <form action="#">
            <input
              placeholder="Search product and services"
              className="w-11/12 pl-5 p-3 rounded-full focus:outline-none font-medium placeholder::text-slate-800 text-2xl border-2 border-cyan-700 focus:border-cyan-300 transition-all"
              type="search"
            />
            <button type="submit" className=" absolute top-4 right-24">
              <IoIosSearch className="text-3xl text-red-600" />
            </button>
          </form>
        </div>
        <div className="cart text-2xl -ml-10">
          <a href="#" className=" hover:text-red-500 transition-all duration-300">
            <MdStore className="inline-block text-4xl" /> Store
          </a>
          <a href="#" className="pl-4 hover:text-red-500 transition-all duration-300">
            <GrCart className="inline-block text-3xl" /> cart
          </a>
        </div>
      </div>
      <div className="py-3 px-8 header-bottom grid grid-cols-2 content-between bg-gray-100 border-t-slate-400 border-t-2">
        <nav>
          <ul>
            <li>
              <a href="#" className="text-2xl">
                <HiOutlinePhoto className="inline-block text-3xl" /> Photo
              </a>
            </li>
            <li className="mx-6">
              <a href="#" className="text-2xl">
                <HiOutlineNewspaper className="inline-block text-3xl mr-2" />
                weekly ad
              </a>
            </li>
            <li>
              <a href="#" className="text-2xl">
                <RiBatteryShareFill className="inline-block text-3xl" />
                Rx refils
              </a>
            </li>
            <li className="mx-5">
              <a href="#" className="text-xl">
                <HiOutlineTruck className="inline-block text-4xl mr-2" />
                Track an order
              </a>
            </li>
            <li>
              <a href="#">
                <MdReplay className="rotate-0 inline-block text-3xl" />
                Buy it again
              </a>
            </li>
          </ul>
        </nav>
        <div className="place-self-end mr-5">
          <ul>
            <li>
              <a href="#" className="text-xl underline underline-offset-4">
                <BsPerson className="mr-3 text-2xl inline-block" />
                Sign in
              </a>
            </li>
            <li className="mx-2 text-xl">
              <p>or</p>
            </li>
            <li>
              <a href="#" className="underline underline-offset-4 mx-5">
                <BsPersonPlus className="mr-2 text-2xl inline-block" />
                Create account
              </a>
            </li>
            <li>
              <a href="#" className="underline underline-offset-4">
                <TfiWorld className="inline-block mr-2" /> Espanol
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
