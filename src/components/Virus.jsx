import { RxDotFilled } from 'react-icons/rx';

export default function Virus() {
  return (
    <section className="mx-auto max-w-screen-xl mt-20 mb-36">
      <section className="virus rounded-2xl pb-20 p-16">
        <div className="virus-details bg-white w-4/12 p-12 rounded-2xl">
          <h1 className="text-5xl font-medium leading-snug">We’re here to help with your COVID-19 needs</h1>
          <small className="text-2xl pt-7 inline-block">You can easily get:</small>
          <ul className="text-2xl m-4 mr-10">
            <li className="block">
              <RxDotFilled className="inline-block" />
              <strong> Vaccines and boosters</strong>
            </li>
            <li className="my-5">
              <RxDotFilled className="inline-block" />
              <strong> No-cost at-home and in-store testing*</strong>
            </li>
            <li>
              <RxDotFilled className="inline-block" />
              <strong> Treatments</strong> (in person, Virtual Care and prescriptions)
            </li>
          </ul>
          <a
            href="#"
            className="text-center bg-red-600 hover:underline text-white 
            text-2xl p-4 px-10 rounded-2xl mt-9"
          >
            Learn more about COVID-19 resources
          </a>
        </div>
      </section>
      <p className="font-medium text-xl mt-5">
        *FOR NO-COST TESTING: No cost with most insurance; please check with your insurer for details. Patients
        without insurance can receive no-cost testing at many CVS Pharmacy® locations through the federal
        government’s Increasing Community Access to Testing Program.
      </p>
    </section>
  );
}
