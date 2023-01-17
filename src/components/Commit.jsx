import Here from '../images/commit/hereLong.png';
import Beauty from '../images/commit/beautyunaltered.png';
import Test from '../images/commit/testedtobetrusted.png';
import { BsChevronRight } from 'react-icons/bs';

export default function Commit() {
  return (
    <section className="mt-64 bg-gray-100">
      <div className="top max-w-screen-xl mx-auto relative bottom-44 z-10">
        <h1 className="text-5xl font-medium">Our commitments to you</h1>
      </div>
      <div className="relative bottom-32 max-w-screen-xl mx-auto grid grid-cols-3  gap-8">
        <div className="rounded-3xl shadow-xl bg-white">
          <img src={Here} className="rounded-t-3xl" alt="" />
          <div className="text-side p-6 pr-16">
            <p className="text-3xl mb-6 leading-snug">
              We are providing easier access to services that support women's health.
            </p>
            <a href="#" className="hover:underline font-semibold text-2xl text-red-600">
              Learn more about our commitment <BsChevronRight className="inline-block" />
            </a>
          </div>
        </div>
        <div className="rounded-3xl shadow-xl bg-white">
          <img src={Beauty} className="rounded-t-3xl" alt="" />
          <div className="text-side p-6 pr-16">
            <p className="text-3xl mb-6 leading-snug">
              Our pledge to pass a healthy self-image on to the next generation.
            </p>
            <a href="#" className="hover:underline font-semibold text-2xl text-red-600">
              Learn more about our pledge <BsChevronRight className="inline-block" />
            </a>
          </div>
        </div>
        <div className="rounded-3xl shadow-xl bg-white">
          <img src={Test} className="rounded-t-3xl" alt="" />
          <div className="text-side p-6 pr-16">
            <p className="text-3xl mb-6 leading-snug">
              We require third-party testing of all vitamins and supplements.
            </p>
            <a href="#" className="hover:underline font-semibold text-2xl text-red-600">
              Learn more about our testing <BsChevronRight className="inline-block" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
