import { RxDotFilled } from 'react-icons/rx';

export default function Virus() {
  return (
    <section className="mx-auto max-w-screen-xl mt-20 mb-36">
      <section className="virus rounded-2xl pb-72 p-16">
        <div className="virus-details bg-slate-200 w-4/12 p-10 rounded-2xl">
          <h1 className="text-5xl font-medium leading-snug">We’re here to help with your COVID-19 needs</h1>
          <small className="text-2xl pt-4 inline-block">You can easily get:</small>
          <ul className="list-disc list-inside text-2xl mt-4 ml-4">
            <li className="block">
              <RxDotFilled className="inline-block" />
              <strong> Vaccines and boosters</strong>
            </li>
            <li className="my-4">
              <RxDotFilled className="inline-block" />
              <strong> No-cost at-home and in-store testing*</strong>
            </li>
            <li>
              <RxDotFilled className="inline-block" />
              <strong> Treatments</strong> (in person, Virtual Care and prescriptions)
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
