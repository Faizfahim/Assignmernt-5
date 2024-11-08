import React from "react";
import Image from "next/image";
 
const Header = () => {
  return (
    <div className="w-full h-[135px] bg-[#A29875] flex gap-28 items-center pl-8">
      <div className="logo">
        <Image src="/images/logo.png" alt="" width={242.56} height={87.45} />
      </div>
      <div className="w-[769.89px] h-14">
        <input
          type="search"
          name="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
          className="w-[650px] h-14 px-7 py-4 outline-none rounded-xl"
        ></input>
        <input type="submit" name="button" value={"Search"} className="cursor-pointer bg-white py-4 px-7 -ml-2 rounded-r-xl"></input>
      </div>
    </div>
  );
};

export default Header;
