import { GoChevronRight } from 'react-icons/go';

import Bopis from '../images/bopis.svg';
import Well from '../images/wellnessjourney.svg';

export default function Shop() {
  return (
    <section className="shop grid grid-cols-2 mb-10 gap-x-5">
      <div className="left flex bg-blue-900 items-center p-7 rounded-2xl">
        <div className="inner-left">
          <img src={Bopis} alt="" />
        </div>
        <div className="ml-9 inner-right text-white">
          <h1 className="text-3xl leading-snug">
            Buy online and pick up in store for FREE in as little as one hour. No minimum purchase required.
          </h1>
          <a href="#" className="text-2xl mt-5">
            Find a store <GoChevronRight className="inline-block" />
          </a>
        </div>
      </div>
      <div className="right flex items-center p-7 rounded- shadow-2xl shadow-slate-500">
        <div className="inner-left">
          <img src={Well} alt="" />
        </div>
        <div className="ml-9 inner-right">
          <h1 className="text-3xl leading-snug font-medium">
            Healthier beginnings for a healthier you. Start your wellness journey today.
          </h1>
          <a href="#" className="text-2xl mt-5 font-medium">
            Shop wellness products at CVS <GoChevronRight className="inline-block" />
          </a>
        </div>
      </div>
    </section>
  );
}
