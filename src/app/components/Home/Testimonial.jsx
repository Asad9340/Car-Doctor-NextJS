import React from 'react';

const Testimonial = () => {
  return (
    <div className="px-5 xl:px-8 py-6 max-w-7xl mx-auto my-8 md:my-[60px]">
      <div className="flex flex-col items-center gap-3 md:gap-5 mb-8 md:mb-10 max-w-[700px] mx-auto">
        <h4 className="text-xl font-bold text-[#FF3811]">Testimonial</h4>
        <h2 className="max-w-[376] text-3xl md:text-[45px] font-bold text-[#151515] leading-normal">
          What Customer Says
        </h2>
        <p className="text-base text-[#737373] leading-[30px] text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 ">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>
    </div>
  );
};

export default Testimonial;
