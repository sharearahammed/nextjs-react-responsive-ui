import Section from "../Hook/Section";

const SectionOne = () => {
  return (
    <div className="py-[48px] px-5 md:px-12 max-w-7xl mx-auto bg-gray-50">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-between md:gap-3">
        <div className="md:mt-24 lg:mt-[94px] flex flex-col gap-5">
        <Section
        title="How Astrophotography changed my life" 
        paraone="              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
" 
        paratwo="#photography" 
        parathree="#astronomy" 
        parafour="#astrophotography" 
        parafive="+" 
        readmore="Read more"
         />
         <Section
        title="
        Which Telescope and DSLR I use" 
        paraone="              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
" 
        paratwo="#photography" 
        parathree="#astronomy" 
        parafour="#astrophotography" 
        parafive="+" 
        readmore="Read more" 
         />
        </div>
        <div className="mt-[50px] md:mt-[56px] lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-0">
            <div>
            <h1 className="font-bold text-[16px] md:text-[26px] lg:mb-2 lg:ml-36">Photos</h1>
            <div className="grid grid-cols-2 gap-0 justify-center items-center">
                <img className="lg:h-[200px] w-full lg:ml-24" src="./Rectangle 2.svg" alt="" />
                <img className="lg:h-[200px] w-full" src="./Rectangle 1.svg" alt="" />
                <img className="lg:h-[200px] w-full lg:ml-24" src="./Rectangle 4.svg" alt="" />
                <img className="lg:h-[200px] w-full " src="./Rectangle 3.svg" alt="" />
            </div>
            <p className="text-[12px] md:text-[16px] flex justify-end md:mr-12 text-[#196AA0] font-semibold hover:cursor-pointer">More +</p>
            </div>
            <div className="md:mt-5 lg:mt-10">
            <h1 className="font-bold text-[16px] md:text-[26px] lg:mb-2 lg:ml-36">Videos</h1>
            <div className="grid grid-cols-1 gap-0 justify-center items-center">
                <img className="lg:h-[215px] w-full lg:ml-12" src="./Video.svg" alt="" />
                <div className="mt-5 lg:mt-1 lg:ml-10 grid grid-cols-3 gap-1 md:gap-0">
                <img className="lg:ml-[81px] lg:h-[115px] w-full" src="./Video 1.svg" alt="" />
                <img className="lg:ml-[27px] lg:h-[115px] w-full" src="./Video 2.svg" alt="" />
                <img className="lg:-ml-[26px] lg:h-[115px] w-full" src="./Video 3.svg" alt="" />
                </div>
            </div>
            <p className="mt-1 md:mt-0 text-[12px] md:text-[16px] flex justify-end md:mr-12 text-[#196AA0] font-semibold hover:cursor-pointer">More +</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
