import { GoDotFill } from "react-icons/go";

const Banner = () => {
    return (
        <div>
            <div className="relative">
            <img className="" src="./banner.jpg" alt="" />
            <div className="px-[272px] absolute top-[220px] flex justify-center items-center gap-[26px]">
                <img src="./Profile Pic2.svg" alt="" />
                <div className="mt-24 flex justify-between gap-[75px]">
                <div className="">
                <div className="flex justify-center items-center gap-[13px]">
                    <h1 className="text-[24px] font-bold">John Doe</h1>
                    <GoDotFill className="text-[16px]" />
                    <p className="text-[12px] text-[#76A4CE]">@johndoe</p>
                </div>
                    <div>
                        <p className="font-bold text-[14px]">
                        Astrophotographer 🌌<br /> 
                        Gamer 👾
                        </p>
                    </div>
                </div>
                <div>
                <button className="bg-[#196aa0] text-white px-[17px] py-[6px] rounded-full">Follow</button>
                </div>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Banner;