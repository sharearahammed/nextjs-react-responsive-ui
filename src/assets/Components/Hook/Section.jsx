/* eslint-disable react/prop-types */

import { useState } from "react";

const Section = ({title,paraone,paratwo,parathree,parafour,parafive,readmore}) => {
    const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
    return (
        <div className="mt-5 md:mt-0 bg-gray-100 shadow p-3 md:p-5 rounded-xl">
          <div>
            <h1 className="font-bold text-[14px] md:text-[18px] lg:text-[26px] mb-2">{title}</h1>
            <p className="mb-2 text-[12px] text-[#5f5f5f]">
            <span className="pl-10">{isExpanded ? paraone : `${paraone.substring(0, 808)}...`}</span>
            </p>
            <hr />
            <div className="mt-2 flex justify-between">
                <div className="text-[6px] md:text-[8px] lg:text-[12px] flex justify-center items-center gap-1 lg:gap-2">
                    <p className="border border-white bg-white md:px-1 lg:px-3 rounded-full text-[#76a4ce] font-semibold">{paratwo}</p>
                    <p className="border border-white rounded-full bg-white px-1 lg:px-3 text-[#76a4ce] font-semibold">{parathree}</p>
                    <p className="border border-white rounded-full bg-white px-1 lg:px-3 text-[#76a4ce] font-semibold">{parafour}</p>
                    <p className="border border-white rounded-full bg-white px-1 lg:px-2 text-[#76a4ce] font-semibold">{parafive}</p>
                </div>
                <div>
                    <button onClick={handleToggle} className="text-[#196aa0] text-[9px] lg:text-[16px] font-semibold">
                    {isExpanded ? 'Read Less' : readmore}
                    </button>
                </div>
            </div>
          </div>
        </div>

    );
};

export default Section;