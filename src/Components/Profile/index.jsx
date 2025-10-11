import React from "react";

const Profile = ({Back}) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Back})` }}
        className="w-full h-[420px] md:h-150 bg-cover bg-right md:bg-center flex items-end"
      >
        <div className="bg-white w-[310px] mb-[20px] md:mb-0 md:w-[600px] lg:w-[866px] py-[40px] md:py-[50px]"></div>
      </div>
    </>
  );
};

export default Profile;
