import Image from "next/image";
import Header from "./Components/header/header";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="flex h-screen ">
        <div className="content-center w-6/12 pl-36 py-28">
          <h1 className="text-3xl w-3/4 font-serif pb-4 mt-10 leading-10">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="font-serif text-[#787054] text-xl py-5 leading-10">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] font-serif text-white px-8 py-2 rounded-lg mt-6">
            Explore Now
          </button>
        </div>
        <div className="relative w-6/12 h-[500px]">
          <Image
           src="/images/banner.png"
            alt=""
            width={350} 
            height={200} 
            className="my-24 mx-16 rounded-tl-[150px] rounded-br-[150px]"
             />
             <div className="absolute border-solid border-[1px] top-3 left-5 w-[315px] h-[440px] my-[100px] mx-[60px] rounded-tl-[150px] rounded-br-[150px]">

             </div>
        </div>
      </div>
    </div>
  );
}
