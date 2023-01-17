import { FiChevronRight } from 'react-icons/fi';
import Heart from '../images/flu/all-products.png';

export default function Flu() {
  return (
    <section className="mx-auto max-w-screen-xl mt-20 mb-36">
      <div className="top">
        <img src={Heart} className="w-24" alt="" />
        <h1 className="text-6xl font-medium mb-10">Cold season is here. Warm up to winter wellness with CVS®.</h1>
      </div>
      <section className="flu rounded-2xl pb-72">
        <div className="flu-links w-2/5 ml-16">
          <a
            href="#"
            className="bg-white shadow-lg shadow-stone-300 hover:underline py-7 px-5 text-3xl rounded-2xl mt-14 flex justify-between"
          >
            Schedule an upper respiratory visit
            <FiChevronRight className="inline-block justify-self-end" />
          </a>
          <a
            href="#"
            className="shadow-lg bg-white shadow-stone-300 hover:underline hover:underline-offset-8 py-7 px-5 text-3xl rounded-2xl my-5"
          >
            Get home delivery for your prescriptions
            <FiChevronRight className="inline-block ml-32" />
          </a>
          <a
            href="#"
            className="shadow-lg  bg-white hover:underline hover:underline-offset-8 py-7 px-5 text-3xl rounded-2xl"
          >
            Shop cough, cold & flu for fast relief
            <FiChevronRight className="inline-block ml-44" />
          </a>
        </div>
      </section>
    </section>
  );
}
