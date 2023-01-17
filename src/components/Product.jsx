import Decor from '../images/product/decor.jpg';
import Extra from '../images/product/extrabucks.jpg';
import Val from '../images/product/valentines.jpg';
import Pick from '../images/product/pickup.jpg';
import { BsChevronRight } from 'react-icons/bs';
import { productItem } from '../faker/product';

export default function Product() {
  return (
    <section className="mt-72 bg-gray-100">
      <div className="top max-w-screen-xl mx-auto relative bottom-52 z-10">
        <h1 className="text-6xl font-medium">New year, new deals, new you</h1>
      </div>
      <div className="relative bottom-44 max-w-screen-xl mx-auto grid grid-cols-4  gap-8 hover:cursor-grab">
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={Decor} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-16 text-2xl">
            60% off posters & wall décor
            <BsChevronRight className="inline-block" />
          </a>
        </div>
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={Extra} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-16 text-2xl">
            Spend $30 Get $10 Extrabucks Rewards on wellness products
            <BsChevronRight className="inline-block" />
          </a>
        </div>
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={Val} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-16 text-2xl">
            Visit the Valentine's Day shop
            <BsChevronRight className="inline-block" />
          </a>
        </div>
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={Pick} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-20 text-2xl">
            Shop all your favorites with FREE CVS Pickup or delivery
            <BsChevronRight className="inline-block" />
          </a>
        </div>
      </div>
      <div className="text-center relative bottom-24">
        <a href="#" className="text-center bg-red-600 hover:underline text-white text-2xl p-5 px-7 rounded-2xl">
          Shop weekly ad deals
        </a>
      </div>
      <div className="max-w-screen-xl mx-auto pb-28">
        <h1 className="text-6xl font-medium">Featured categories</h1>
        <div className="bottom grid grid-cols-3 col-span-3 gap-x-10 mt-10 ">
          {productItem.map((item) => (
            <a
              href="#"
              className="bg-white shadow-lg shadow-stone-300 hover:underline p-4 text-3xl rounded-2xl mt-8 flex justify-between items-center"
            >
              <div className="left flex items-center">
                <img src={item.img} className="mr-3 w-14" alt="" />
                {item.text}
              </div>
              <div className="right">
                <BsChevronRight />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
