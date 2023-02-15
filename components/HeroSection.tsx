export default function HeroSection() {
  return (
    <div className="w-full mb-24 py-24  h-[80vh] flex justify-center items-center ">
      <div className="h-full text-center gap-14 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-raleway font-bold text-[#ECF1F0] ">
          Start and Build Your Crypto Portfolio Here
        </h1>
        <h2 className="w-[65%] font-roboto text-lg text-[#B6B6B6]">
          Only at CryptoCap, you can build a good portfolio and learn best
          practices about cryptocurrency.
        </h2>
        <button className="bg-[#0FAE96] mt-4 font-raleway text-white font-bold text-lg py-3 px-14 rounded-[10px]">
          Get Started
        </button>
      </div>
    </div>
  );
}
