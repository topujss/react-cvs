import { BsChevronRight } from 'react-icons/bs';

import Bopis from '../images/shop/bopis.png';
import Well from '../images/shop/wellnessjourney.png';

export default function Shop() {
  return (
    <section className="shop grid grid-cols-2 mb-24 gap-x-5">
      <div className="left flex bg-blue-900 items-center p-3 rounded-3xl shadow-2xl shadow-slate-400">
        <div className="inner-left ml-4">
          <img src={Bopis} className="w-32" alt="" />
        </div>
        <div className="ml-14 inner-right text-white">
          <h1 className="text-3xl font-medium leading-snug">
            Select in-store pickup; ready in as little as an hour. No minimum purchase required.
          </h1>
          <a href="#" className="text-2xl mt-5 font-semibold">
            Find a store <BsChevronRight className="inline-block" />
          </a>
        </div>
      </div>
      <div className="right flex items-center p-5 shadow-2xl shadow-stone-400 rounded-3xl">
        <div className="inner-left">
          <img src={Well} className="w-32" alt="" />
        </div>
        <div className="ml-9 inner-right">
          <h1 className="text-3xl leading-snug font-medium">
            Healthier beginnings for a healthier you. Start your wellness journey today.
          </h1>
          <a href="#" className="text-2xl mt-5 font-semibold text-red-700">
            Shop wellness products at CVS <BsChevronRight className="inline-block" />
          </a>
        </div>
      </div>
      <h1 className="relative top-8 mt-28 text-5xl font-medium">Fill prescriptions your way</h1>
    </section>
  );
}
