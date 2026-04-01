import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full relative h-130 bg-cover bg-[url(/Beige-Modern-Cafe-Banner.png)] ">
        </div>
        <div className="pt-25 flex flex-col justify-center items-center bg-[url(/v1010-pattern-04.jpg)] bg-cover">
          <h1 className="text-white text-4xl m-5">Dryad's Favourite Menu</h1>
          <p className="text-white">Choose Your Lunchbox To Start</p>
          <div className="p-10 max-w-265 grid grid-cols-3 gap-5">
            <button className="p-10 bg-white flex flex-col items-center text-center h-full w-full rounded-[5px] border-2 border-transparent hover:border-[#543521] hover:cursor-pointer ">
              <Image src="/blueberry creamy smoothie.jpg" width={200} height={200} alt="pancake"></Image>
              <h2><b>Smoothie</b></h2>
              <p>Pancake with chocolate and strawberries</p>
            </button>
            <button className="p-10 bg-white flex flex-col items-center text-center h-full w-full rounded-[5px] border-2 border-transparent hover:border-[#543521] hover:cursor-pointer ">
              <Image src="/blueberry creamy smoothie.jpg" width={200} height={200} alt="pancake"></Image>
              <h2><b>Smoothie</b></h2>
              <p>Pancake with chocolate and strawberries</p>
            </button>            <button className="p-10 bg-white flex flex-col items-center text-center h-full w-full rounded-[5px] border-2 border-transparent hover:border-[#543521] hover:cursor-pointer ">
              <Image src="/blueberry creamy smoothie.jpg" width={200} height={200} alt="pancake"></Image>
              <h2><b>Smoothie</b></h2>
              <p>Pancake with chocolate and strawberries</p>
            </button>            <button className="p-10 bg-white flex flex-col items-center text-center h-full w-full rounded-[5px] border-2 border-transparent hover:border-[#543521] hover:cursor-pointer ">
              <Image src="/blueberry creamy smoothie.jpg" width={200} height={200} alt="pancake"></Image>
              <h2><b>Smoothie</b></h2>
              <p>Pancake with chocolate and strawberries</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-5">
          <h1>FOLLOW US!</h1>
          <nav className="flex flex-row justify-center">
            <ul className="flex flex-row gap-2">
              <li><Link href=""><Image src="/EARTH green bg.png" height={75} width={75} alt="Social Media Logo 1"></Image></Link></li>
              <li><Link href=""><Image src="/EARTH green bg.png" height={75} width={75} alt="Social Media Logo 1"></Image></Link></li>
              <li><Link href=""><Image src="/EARTH green bg.png" height={75} width={75} alt="Social Media Logo 1"></Image></Link></li>
              <li><Link href=""><Image src="/EARTH green bg.png" height={75} width={75} alt="Social Media Logo 1"></Image></Link></li>
            </ul>
          </nav>



        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-5"><h4>Our Food</h4></div>
        <div className="flex flex-col justify-center items-center gap-5 p-5">Hot Today</div>
        <div className="flex flex-col justify-center items-center gap-5 p-5">Newsletter</div>
        <div className="flex flex-col justify-center items-center gap-5 p-5">Community</div>
        <div className="flex flex-col justify-center items-center gap-5 p-5">Our Impact</div>
        <div className="flex flex-col justify-center items-center gap-5 p-5">Feedback</div>
      </div >
    </>

  );
}
