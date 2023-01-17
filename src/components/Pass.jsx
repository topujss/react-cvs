import cpLogo from '../images/pass/carepasslogo.svg';
import passBg from '../images/pass/carepassDP.jpg';

import { BsChevronRight } from 'react-icons/bs';

export default function Pass() {
  return (
    <section className="mx-auto max-w-screen-xl my-32 shadow-2xl rounded-3xl grid grid-cols-7">
      <div className="left p-16 col-span-3">
        <img src={cpLogo} className="w-42" alt="" />
        <h1 className="text-5xl leading-snug font-medium my-3">Save 20% every day with CarePass®</h1>
        <p className="text-2xl font-medium leading-normal">
          Join CarePass and get 20% off CVS Health® brand products, FREE same-day Rx delivery, FREE shipping from
          CVS.com® and access to our 24/7 Pharmacist Helpline.
        </p>
        <a href="#" className="hover:underline font-semibold mt-5 text-2xl text-red-600">
          Try your first month FREE <BsChevronRight className="inline-block" />
        </a>
      </div>
      <div className="right col-span-4">
        <img className="rounded-r-3xl" src={passBg} alt="" />
      </div>
    </section>
  );
}
