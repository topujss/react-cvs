import Here from '../images/slider/here.png';
import All from '../images/flu/all-products.png';
import Covid from '../images/slider/covid.png';
import Gift from '../images/slider/wellness.png';
import Vit from '../images/slider/vitamin.png';
import Med from '../images/slider/med.png';
import { GoChevronLeft } from 'react-icons/go';
import { BsChevronRight } from 'react-icons/bs';

export default function Slider() {
  return (
    <section className="slider bg-white p-6 shadow-md rounded-2xl z-30 relative top-1 ">
      <div className="top grid grid-cols-3">
        <h1 className="my-5 col-span-2 text-5xl font-medium ">Shop seasonal health & wellness essentials</h1>
        <div className="icons justify-self-end col-span-1 my-5 mr-10">
          <span className="text-center w-14 h-14 rounded-full text-4xl border border-slate-500 text-slate-500 inline-block">
            <GoChevronLeft className="inline-block" />
          </span>
          <span className="text-center w-14 h-14 rounded-full text-4xl border border-slate-800 inline-block ml-3 cursor-pointer">
            <BsChevronRight className="inline-block" />
          </span>
        </div>
      </div>
      <div className="bottom grid grid-cols-6 mt-5 gap-x-6 cursor-grab">
        <div className="card bg-purple-100 p-7 rounded-3xl">
          <div className="card-top w-2/3 mx-auto">
            <img className="" src={Here} alt="" />
          </div>
          <h4 className="text-center text-2xl mt-4">
            Here for woman's health <BsChevronRight className="inline-block" />
          </h4>
        </div>
        <div className="card bg-gray-100 p-7 rounded-3xl group cursor-pointer">
          <div className="card-top w-2/3 mx-auto">
            <img className="" src={All} alt="" />
          </div>
          <h4 className="text-center text-2xl mt-4 group-hover:underline group-hover:transition-all duration-300 ">
            All products <BsChevronRight className="inline-block" />
          </h4>
        </div>
        <div className="card bg-gray-100 p-7 rounded-3xl group cursor-pointer">
          <div className="card-top w-2/3 mx-auto">
            <img className="" src={Covid} alt="" />
          </div>
          <h4 className="text-center text-2xl mt-4 group-hover:underline group-hover:transition-all duration-300 ">
            At-home COVID-19 tests <BsChevronRight className="inline-block" />
          </h4>
        </div>
        <div className="card bg-gray-100 p-7 rounded-3xl group cursor-pointer">
          <div className="card-top w-2/3 mx-auto">
            <img className="" src={Gift} alt="" />
          </div>
          <h4 className="text-center text-2xl mt-4 group-hover:underline group-hover:transition-all duration-300 ">
            Wellness gifts <BsChevronRight className="inline-block" />
          </h4>
        </div>
        <div className="card bg-gray-100 p-7 rounded-3xl group cursor-pointer">
          <div className="card-top w-2/3 mx-auto">
            <img className="" src={Vit} alt="" />
          </div>
          <h4 className="text-center text-2xl mt-4 group-hover:underline group-hover:transition-all duration-300 ">
            Vitamins <BsChevronRight className="inline-block" />
          </h4>
        </div>
        <div className="card bg-gray-100 p-6 rounded-3xl group cursor-pointer">
          <div className="card-top w-2/3 mx-auto">
            <img className="" src={Med} alt="" />
          </div>
          <h4 className="text-center text-2xl mt-4 group-hover:underline group-hover:transition-all duration-300">
            Health & medicine <BsChevronRight className="inline-block" />
          </h4>
        </div>
      </div>
      <div className="dot grid grid-cols-1 text-center mt-5 ">
        <ul>
          <li className="w-8 h-3 mr-3 bg-red-500 rounded-full"></li>
          <li className="w-3 h-3 border border-red-500 rounded-full"></li>
          <li className="w-3 h-3 mx-3 border border-red-500 rounded-full"></li>
          <li className="w-3 h-3 border border-red-500 rounded-full"></li>
          <li className="w-3 h-3 mx-3 border border-red-500 rounded-full"></li>
          <li className="w-3 h-3 border border-red-500 rounded-full"></li>
          <li className="w-3 h-3 mx-3 border border-red-500 rounded-full"></li>
        </ul>
      </div>
    </section>
  );
}
