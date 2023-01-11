import { FiChevronRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero container mx-auto max-w-screen-xl bg-sky-200 rounded-2xl p-10 pt-16 pb-20 flex justify-between">
      <div className="hero-text w-5/12">
        <h1 className="text-7xl font-medium leading-tight">Make a commitment to a healthier New Year</h1>
        <div className="links grid grid-rows-3">
          <a href="#" className="shadow-md bg-white hover:underline p-5 text-3xl mt-5 rounded-2xl">
            Get care from a provider
            <FiChevronRight className="justify-self-end inline-block ml-72" />
          </a>
          <a href="#" className="shadow-md bg-white hover:underline p-5 text-3xl my-5 rounded-2xl">
            Schedule a flu shot
            <FiChevronRight className="justify-self-end inline-block ml-80" />
          </a>
          <a href="#" className="shadow-md bg-white hover:underline p-5 text-3xl mb-5 rounded-2xl">
            COVID-19 booster, tests, treatments & records
            <FiChevronRight className="justify-self-end inline-block ml-10" />
          </a>
        </div>
      </div>
      <div className="hero-bg w-7/12 relative left-10 top-5 z-0"></div>
    </section>
  );
}
