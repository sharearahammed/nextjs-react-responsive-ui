/* eslint-disable react/prop-types */

const Section = ({title,paraone,paratwo,parathree,parafour,parafive,readmore}) => {
    return (
        <div className="bg-gray-100 shadow p-5 rounded-xl">
          <div>
            <h1 className="font-bold text-[26px] mb-2">{title}</h1>
            <p className="mb-2 text-[#5f5f5f] font-semibold">
              {paraone}
            </p>
            <hr />
            <div className="mt-2 flex justify-between">
                <div className="text-[10px] flex justify-center items-center gap-2">
                    <p className="border bg-white px-3 rounded-full text-[#76a4ce] font-semibold">{paratwo}</p>
                    <p className="border rounded-full bg-white px-3 text-[#76a4ce] font-semibold">{parathree}</p>
                    <p className="border rounded-full bg-white px-3 text-[#76a4ce] font-semibold">{parafour}</p>
                    <p className="border rounded-full bg-white px-2 text-[#76a4ce] font-semibold">{parafive}</p>
                </div>
                <div>
                    <p className="text-[#196aa0] text-[12px] font-semibold">
                       {readmore}
                    </p>
                </div>
            </div>
          </div>
        </div>

    );
};

export default Section;