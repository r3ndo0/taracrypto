import { CgInstagram } from "react-icons/cg";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex py-8 gap-16 px-24 justify-between items-center border-t-2 border-t-[#FFFFFF0D]">
      <div className=" ">
        <h1 className="text-2xl mb-16 text-white w-full font-bold">
          Crypto<span className="text-[#0FAE96]">Cap</span>
        </h1>
        <div className="flex mb-8 gap-4 justify-start text-[#B6B6B6] items-center">
          <CgInstagram />
          <BsFacebook />
          <BsTwitter />
          <BsYoutube />
        </div>
        <p className="text-[#B6B6B6]">
          2021 CoinMarketCap. All rights reserved
        </p>
      </div>

      <div className="text-[#B6B6B6]">
        <h2 className="font-bold mb-4">About Us</h2>
        <p className="mb-4">About</p>
        <p className="mb-4">Careers</p>
        <p className="mb-4">Blog</p>
        <p className="mb-4">Legal & Privacy</p>
      </div>
      <div className="text-[#B6B6B6]">
        <h2 className="font-bold mb-4">Services</h2>
        <p className="mb-4">Applications</p>
        <p className="mb-4">Buy Crypto</p>
        <p className="mb-4">Affiliate</p>
        <p className="mb-4">Institutional Services</p>
      </div>
      <div className="text-[#B6B6B6]">
        <h2 className="font-bold mb-4">Learn</h2>
        <p className="mb-4">What is CryptoCurrency ?</p>
        <p className="mb-4">Crypto Baic</p>
        <p className="mb-4">Tips and Tutorials</p>
        <p className="mb-4">Market Update</p>
      </div>
    </div>
  );
}
