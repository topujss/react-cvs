import Care from '../../components/Care';
import Commit from '../../components/Commit';
import Flu from '../../components/Flu';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Pass from '../../components/Pass';
import Presc from '../../components/Presc';
import Product from '../../components/Product';
import Shop from '../../components/Shop';
import Slider from '../../components/Slider';
import Virus from '../../components/Virus';

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
      <Virus />
      <Commit />
      <Pass />
      <Footer />
    </>
  );
}
