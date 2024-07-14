import { GoDotFill } from "react-icons/go";

const Banner = () => {
    return (
        <div className="md:mt-16 lg:mt-0">
            <div className="relative">
            <img className="h-[140px] md:h-[200px] lg:h-[325px] w-full" src="./banner.jpg" alt="" />
            <div className="px-5 md:px-[135px] absolute top-[1px] md:top-28 lg:top-[220px] flex justify-center items-center md:gap-[26px]">
                <img className="mt-14 md:mt-2 md:mb-0 h-[100px] md:h-[160px] lg:h-[200px] " src="./Profile Pic2.svg" alt="" />
                <div className="mt-36  md:mt-24 flex justify-between gap-2 md:gap-12 lg:gap-[75px]">
                <div className="ml-2 md:ml-0">
                <div className="flex justify-center items-center gap-1 md:gap-0 lg:gap-[13px]">
                    <h1 className="text-[20px] md:text-[16px] lg:text-[24px] font-bold">John Doe</h1>
                    <GoDotFill className="text-[10px] md:text-[16px]" />
                    <p className=" text-[10px] md:text-[12px] text-[#76A4CE]">@johndoe</p>
                </div>
                    <div>
                        <p className="font-semibold text-[14px]">
                        Astrophotographer 🌌<br /> 
                        Gamer 👾
                        </p>
                    </div>
                </div>
                <div>
                <button className="mt-5 md:mt-5 bg-[#196aa0] text-white px-3 py-1 md:px-[17px] md:py-[6px] rounded-full text-[10px] md:text-[16px]">Follow</button>
                </div>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Banner;