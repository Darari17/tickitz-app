export const Subscriber = () => {
  return (
    <div className="flex flex-row justify-center items-center relative">
      <form className="flex flex-col align-middle justify-center items-center w-[90%]  bg-[#2563eb] rounded-[20px] gap-7 py-10 ">
        <div>
          <div className="text-[#ffffff] font-normal text-4xl/[50px] tracking-wider ">
            Subscribe to our newsletter
          </div>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="First name"
            className="bg-[#2563eb] rounded-[9px] border border-[#d4d4d8] text-white font-normal w-52 h-14 pl-2.5"
          />
          <input
            type="text"
            placeholder="Email address"
            className="bg-[#2563eb] rounded-[9px] border border-[#d4d4d8] text-white w-56 h-14 pl-2.5"
          />
          <button className="bg-white w-56 h-14 rounded-[9px] text-[18px]/[28px] font-bold text-[#1d4ed8] cursor-pointer">
            Subscribe Now
          </button>
          <div className="absolute border-6 border-white w-[200px] h-[200px] rounded-full right-0 bottom-0 translate-y-35 overflow-hidden"></div>
        </div>
      </form>
    </div>
  );
};
