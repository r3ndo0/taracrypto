import { BsGlobe } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
export default function Navbar() {
  return (
    <div className="text-[#ECF1F0] px-8 font-raleway flex items-center justify-between h-[90px] ">
      <div className="text-2xl w-full font-bold">
        Crypto<span className="text-[#0FAE96]">Cap</span>
      </div>
      <div className="">
        <ul className="flex justify-between items-center gap-12 w-full">
          <li className="text-[#0FAE96]">Home</li>
          <li>Businesses</li>
          <li>Trade</li>
          <li>Market</li>
          <li>Learn</li>
        </ul>
      </div>
      <div className="w-full flex justify-end items-center gap-4">
        <button className="flex items-center  gap-2">
          <BsGlobe size={20} />
          <span className="text-sm">EN</span>
          <RiArrowDownSLine size={20} />
        </button>
        <button className="rounded-[10px] py-2 px-6 text-white bg-[#0FAE96]">
          Login
        </button>
      </div>
    </div>
  );
}
