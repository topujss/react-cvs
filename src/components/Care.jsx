import Inperson from '../images/care/inpersoncareDP.jpg';
import Online from '../images/care/virtualcareDP.jpg';
import { GoChevronRight } from 'react-icons/go';
import { FiChevronRight } from 'react-icons/fi';
import { CareItem } from '../faker/care';

export default function Care() {
  return (
    <section className="mt-64 bg-gray-100 ">
      <div className="top max-w-screen-xl mx-auto relative bottom-40 z-10">
        <h1 className="text-5xl font-medium">Get the care you may need from MinuteClinic®</h1>
      </div>
      <div className="relative bottom-32 max-w-screen-xl mx-auto grid grid-cols-2  gap-8">
        <a href="#" className="rounded-3xl shadow-2xl text-5xl text-red-600 bg-white group ">
          <img src={Inperson} className="rounded-t-3xl" alt="" />
          <span className="p-16 group-hover:underline font-medium">
            In-person care <GoChevronRight className="inline-block" />
          </span>
        </a>
        <a href="#" className="rounded-3xl shadow-2xl text-5xl text-red-600 bg-white group ">
          <img src={Online} className="rounded-t-3xl" alt="" />
          <span className="p-16 group-hover:underline capitalize font-medium">
            virtual care <GoChevronRight className="inline-block" />
          </span>
        </a>
        <div className="bottom grid grid-cols-3 col-span-3 gap-x-10 mt-10 ">
          {CareItem.map((item, index) => (
            <a
              href="#"
              className="bg-white shadow-lg shadow-stone-300 hover:underline py-7 px-5 text-3xl rounded-2xl mt-10 flex justify-between items-center"
            >
              <div className="left flex items-center">
                <img src={item.img} className="mr-3" alt="" />
                {item.text}
              </div>
              <div className="right">
                <FiChevronRight />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
