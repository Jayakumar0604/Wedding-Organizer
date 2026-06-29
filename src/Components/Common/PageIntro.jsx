import React from "react";

const PageIntro = ({ title, description }) => {
  return (
    <div className="bg-[#f6f2f1] w-full">
      <div className="flex px-10 lg:px-20 py-10 md:py-16 lg:py-20 gap-3">
        <div className="flex-2 lg:px-30">
          <h1 className="text-[46px] md:text-[80px] lg:text-[100px] cardo-regular leading-tight text-black">
            {title}
          </h1>
          {description && (
            <div className="mt-4 max-w-4xl">
              <p className="text-[14px] md:text-[16px] raleway-font text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
        <div className="flex-1 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default React.memo(PageIntro);
