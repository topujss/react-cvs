import Care from '../../components/Care';
import Flu from '../../components/Flu';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Presc from '../../components/Presc';
import Product from '../../components/Product';
import Shop from '../../components/Shop';
import Slider from '../../components/Slider';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Shop />
      <Presc />
      <Flu />
      <Care />
      <Product />
    </>
  );
}
