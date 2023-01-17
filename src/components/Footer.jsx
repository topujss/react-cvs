import { BsChevronRight } from 'react-icons/bs';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FaYoutubeSquare } from 'react-icons/fa';

import footer from '../images/footer/footer.svg';

export default function Footer() {
  return (
    <footer className="bg-stone-200 border-t-2 border-t-red-500 pt-7">
      <div className="mx-auto max-w-screen-lg grid grid-cols-5 gap-x-3 border border-b-slate-700 pb-10">
        <ul className="pharma">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              Pharmacy <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li className="block">
            <a href="/">Coronavirus Updates</a>
          </li>
          <li>
            <a href="/">Drug Information Center</a>
          </li>
          <li>
            <a href="/">Transfer Prescriptions</a>
          </li>
          <li>
            <a href="/">Refill Prescriptions</a>
          </li>
          <li>
            <a href="/">COVID Vaccine</a>
          </li>
          <li>
            <a href="/">Prescription Delivery</a>
          </li>
          <li>
            <a href="/">New York Patient Bill of Rights (PDF) </a>
          </li>
          <li>
            <a href="/" className="mr-10">
              NY Prescription Drug Price List
            </a>
          </li>
        </ul>
        <ul className="pharma">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              Store Locator <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li className="block">
            <a href="/">Passport Photos</a>
          </li>
          <li>
            <a href="/">Eye Exams</a>
          </li>
          <li>
            <a href="/">HealthHUB </a>
          </li>
          <li>
            <a href="/">CVS photo </a>
          </li>
          <li>
            <a href="/">MinuteClinic </a>
          </li>
          <li>
            <a href="/">Optical Center </a>
          </li>
          <li>
            <a href="/">UPS Access Point</a>
          </li>
        </ul>
        <ul className="pharma">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              Account Information
              <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li className="block">
            <a href="/">My Account</a>
          </li>
          <li>
            <a href="/">Order Status</a>
          </li>
        </ul>
        <ul className="pharma">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              Shop
              <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li className="block">
            <a href="/">Popular Searches </a>
          </li>
          <li>
            <a href="/">Online Deals </a>
          </li>
          <li>
            <a href="/">Weekly Ad</a>
          </li>
          <li>
            <a href="/">Veterans Advantage</a>
          </li>
        </ul>
        <ul className="pharma">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              ExtraCare
              <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li>
            <a href="/">Pharmacy & Health Rewards </a>
          </li>
          <li>
            <a href="/">Beauty Club Rewards</a>
          </li>
        </ul>
        <ul className="pharma mt-6">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              Help
              <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li>
            <a href="/">Order Cancellation Policy</a>
          </li>
          <li>
            <a href="/">Return Policy</a>
          </li>
          <li>
            <a href="/">Order Cancellation Policy</a>
          </li>
          <li>
            <a href="/">Shipping Information</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/" className="mr-5">
              Non-Discrimination Policy (PDF)
            </a>
          </li>
          <li>
            <a href="/">Site Map</a>
          </li>
          <li>
            <a href="/">Security</a>
          </li>
          <li>
            <a className="mr-5" href="/">
              Vulnerability Disclosure Program
            </a>
          </li>
          <li>
            <a href="/">In-Store WiFi Terms</a>
          </li>
        </ul>
        <ul className="pharma mt-6">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              CVSHealth Companies
              <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li>
            <a href="/">Aetna</a>
          </li>
          <li>
            <a href="/">Caremark</a>
          </li>
          <li>
            <a href="/">SilverScript</a>
          </li>
          <li>
            <a href="/">Omnicare</a>
          </li>
        </ul>
        <ul className="pharma mt-6">
          <li>
            <a href="/" className="text-red-700 font-semibold mb-3 text-2xl no-underline">
              Corporate Information
              <BsChevronRight className="inline-block" />
            </a>
          </li>
          <li>
            <a href="/">CVSHealth.com</a>
          </li>
          <li>
            <a href="/">Newsroom</a>
          </li>
          <li>
            <a href="/">Social Responsibility</a>
          </li>
          <li>
            <a href="/">Careers </a>
          </li>
          <li>
            <a href="/">Patient Privacy </a>
          </li>
          <li>
            <a href="/">Ethics & Human Rights </a>
          </li>
          <li>
            <a href="/">Real Estate</a>
          </li>
          <li>
            <a href="/">Sell Your Pharmacy Suppliers</a>
          </li>
          <li>
            <a href="/">Suppliers</a>
          </li>
        </ul>
      </div>
      <div className="social mx-auto max-w-screen-lg flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-slate-600 mr-5">Follow us on:</h1>
        <ul className="mt-3 mr-7 pr-7 border-r border-slate-500">
          <li>
            <a href="/">
              <AiFillFacebook className="text-5xl" />
            </a>
          </li>
          <li>
            <a href="/">
              <AiFillTwitterSquare className="text-5xl mx-5" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaYoutubeSquare className="text-5xl" />
            </a>
          </li>
        </ul>
        <a href="/" className="underline text-2xl font-semibold text-slate-600">
          CVS Mobile App
        </a>
      </div>
      {/* footer bottom */}
      <div className="bottom bg-stone-700 text-white flex justify-center items-center pt-16 pb-24 flex-col">
        <ul>
          <li>
            <a href="/">Manage Email Preferences</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Accessibility</a>
          </li>
          <li>
            <a href="/">Privacy Policy </a>
          </li>
          <li>
            <a href="/">Do Not Sell or Share My Personal Information </a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Return Policy</a>
          </li>
        </ul>
        <img className="w-24 my-10 rounded-lg" src={footer} alt="" />
        <p className="text-2xl">© Copyright 1999-{new Date().getFullYear()} CVS.com</p>
      </div>
    </footer>
  );
}
