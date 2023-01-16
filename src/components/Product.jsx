import Canvas from '../images/product/canvas.jpg';
import Extra from '../images/product/extrabucks.jpg';
import Pick from '../images/product/pickup.jpg';
import New from '../images/product/new.jpg';
import { BsChevronRight } from 'react-icons/bs';
import { productItem } from '../faker/product';

export default function Product() {
  return (
    <section className="mt-72 bg-gray-100">
      <div className="top max-w-screen-xl mx-auto relative bottom-52 z-10">
        <h1 className="text-6xl font-medium">Shop wellness wins and bring out the best in you</h1>
      </div>
      <div className="relative bottom-44 max-w-screen-xl mx-auto grid grid-cols-4  gap-8 hover:cursor-grab">
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={Canvas} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-16 text-2xl">
            Start the New Year with your favorite prints. Up to 70% off 11x14 and 16x20 canvas prints
            <BsChevronRight className="inline-block" />
          </a>
        </div>
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={Extra} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-16 text-2xl">
            It's a new day for your wellness! Spend $30, get $10 ExtraBucks Rewards on wellness products
            <BsChevronRight className="inline-block" />
          </a>
        </div>
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={Pick} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-16 text-2xl">
            Shop all your favorites online with FREE CVS Pickup or get free shipping on orders $35+
            <BsChevronRight className="inline-block" />
          </a>
        </div>
        <div className="card shadow-2xl rounded-3xl text-xl bg-white">
          <img src={New} className="rounded-t-3xl" alt="" />
          <a href="#" className="hover:underline p-10 pr-20 text-2xl">
            Meet Billie, "The Internet's Favorite Razor" NEW! Now at CVS
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
