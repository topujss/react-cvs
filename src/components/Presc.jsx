import Manage from '../images/presc/managerx.jpg';
import Transfer from '../images/presc/transferrx.jpg';
import Pax from '../images/presc/paxlovid.png';
import { GoChevronRight } from 'react-icons/go';

export default function Presc() {
  return (
    <section className="mt-56 bg-gray-100">
      <div className="relative bottom-36 max-w-screen-xl mx-auto grid grid-rows-2 grid-flow-col gap-8">
        <div className="col-span-2 flex justify-between shadow-2xl rounded-3xl bg-white p-12">
          <div className="inner-left place-self-start">
            <h1 className="text-7xl font-medium leading-tight">
              Manage your <br /> prescriptions
            </h1>
            <a href="#" className="text-2xl pt-14 font-semibold text-red-600">
              Refill prescriptions <GoChevronRight className="inline-block" />
            </a>
          </div>
          <div className="inner-right">
            <img className="w-72" src={Manage} alt="" />
          </div>
        </div>
        <div className="col-span-2 flex justify-between items-center shadow-2xl rounded-3xl bg-white p-12">
          <div className="inner-left ">
            <h1 className="text-7xl font-medium leading-tight">Get started online</h1>
            <a href="#" className="text-2xl pt-8 font-semibold text-red-600">
              Transfer your prescriptions <GoChevronRight className="inline-block" />
            </a>
          </div>
          <div className="inner-right">
            <img className="w-72" src={Transfer} alt="" />
          </div>
        </div>
        <div className="row-span-2 shadow-2xl rounded-3xl bg-white p-8">
          <div className="inner-left">
            <h1 className="text-7xl font-medium leading-snug">
              Your CVS® <br />
              pharmacist can
              <br /> prescribe
              <br /> Paxlovid
            </h1>
            <a href="#" className="text-2xl py-12 font-semibold text-red-600">
              Take our eligibility screener <GoChevronRight className="inline-block" />
            </a>
          </div>
          <div className="inner-right">
            <img className="w-72" src={Pax} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
