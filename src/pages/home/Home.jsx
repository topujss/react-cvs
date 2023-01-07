import Logo from '../../images/logo.svg';

import { BsChevronDown } from 'react-icons/bs';
import { GrCart } from 'react-icons/gr';
import { MdStore } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';

export default function Home() {
  return (
    <header>
      <div className="header-top grid grid-cols-8 content-center bg-emerald-500 place-items-center justify-items-center py-2 grid-flow-col">
        <div className="logo justify-self-start pl-8">
          <img src={Logo} alt="" />
        </div>
        <nav className="col-span-3 ">
          <ul>
            <li className="inline-block">
              <a className="text-2xl hover:text-red-500 transition-all duration-300" href="#">
                Prescriptions <BsChevronDown className="inline-block text-2xl" />
              </a>
            </li>
            <li className="inline-block px-7">
              <a href="#" className="text-2xl hover:text-red-500 transition-all duration-300">
                Health <BsChevronDown className="inline-block" />
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-2xl hover:text-red-500 transition-all duration-300">
                Shop <BsChevronDown className="inline-block" />
              </a>
            </li>
            <li className="inline-block px-7">
              <a href="#" className="text-2xl hover:text-red-500 transition-all duration-300">
                Savings & Memberships <BsChevronDown className="inline-block" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="search col-span-3 place-self-stretch">
          <form action="#">
            <input className="w-full" type="search" />
            <button type="submit">
              <IoIosSearch />
            </button>
          </form>
        </div>
        <div className="cart">
          <a href="#">
            <MdStore /> Store
          </a>
          <a href="#">
            <GrCart /> cart
          </a>
        </div>
      </div>
    </header>
  );
}
