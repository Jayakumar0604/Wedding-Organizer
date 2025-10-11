// import React from "react";

// const Form = () => {
//   return (
//     <>
//       <div className=" px-5 md:px-10 lg:px-30 lg:py-10">
//         <h1 className=" text-[20px] lg:text-[22px] cardo-regular pb-5">
//           Start Plan Your Wedding
//         </h1>
//         <div className=" space-y-5">
//           <div className=" flex justify-between space-x-2">
//             <input
//               type="text"
//               placeholder="First Name"
//               className=" w-full p-[10px] bg-[#f6f2f1]"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="p-[10px] w-full  bg-[#f6f2f1]"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-[10px] bg-[#f6f2f1]"
//             />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="Phone"
//               className="w-full p-[10px] bg-[#f6f2f1]"
//             />
//           </div>
//           <div className="space-y-2">
//             <label htmlFor="Ref" className="raleway-fonto block text-[14px] lg:text-[16px]">
//               Referral
//             </label>
//             <select
//               className="w-full p-[10px] raleway-font bg-[#f6f2f1]"
//               id="Ref"
//             >
//               <option value="Our Website">Our Website</option>
//               <option value="Former Client">Former Client</option>
//               <option value="Social Media">Social Media</option>
//               <option value="From a Friend">From a Friend</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="space-y-2">
//             <label htmlFor="Ref" className="raleway-fonto block text-[14px] lg:text-[16px]">
//               Services
//             </label>
//             <select
//               className="w-full p-[10px] raleway-font bg-[#f6f2f1]"
//               id="Ref"
//             >
//               <option value="Full Planninge">Full Planning</option>
//               <option value="Bridal Assistance">Bridal Assistance</option>
//               <option value="Express Wedding">Express Wedding</option>
//               <option value="Express Wedding">Express Wedding</option>
//             </select>
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Venue Name"
//               className="w-full p-[10px] bg-[#f6f2f1]"
//             />
//           </div>
//           <div>
//             <textarea
//               className="w-full p-[10px] bg-[#f6f2f1]"
//               placeholder="Message"
//               name="Message"
//             ></textarea>
//           </div>
//           <div>
//             <button className="px-5 py-2 bg-black text-white raleway-font">Submit</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referral: "Our Website",
    service: "Full Planning",
    venue: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.venue.trim()) newErrors.venue = "Venue Name is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-5 md:px-10 lg:px-30 lg:py-10">
        <h1 className="text-[20px] lg:text-[22px] cardo-regular pb-5">
          Start Plan Your Wedding
        </h1>
        <div className="space-y-5">
          <div className="flex justify-between space-x-2">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-[10px] bg-[#f6f2f1]"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-[10px] bg-[#f6f2f1]"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-[10px] bg-[#f6f2f1]"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-[10px] bg-[#f6f2f1]"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="referral" className="raleway-fonto block text-[14px] lg:text-[16px]">
              Referral
            </label>
            <select
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className="w-full p-[10px] raleway-font bg-[#f6f2f1]"
              id="referral"
            >
              <option value="Our Website">Our Website</option>
              <option value="Former Client">Former Client</option>
              <option value="Social Media">Social Media</option>
              <option value="From a Friend">From a Friend</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="raleway-fonto block text-[14px] lg:text-[16px]">
              Services
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-[10px] raleway-font bg-[#f6f2f1]"
              id="service"
            >
              <option value="Full Planning">Full Planning</option>
              <option value="Bridal Assistance">Bridal Assistance</option>
              <option value="Express Wedding">Express Wedding</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              name="venue"
              placeholder="Venue Name"
              value={formData.venue}
              onChange={handleChange}
              className="w-full p-[10px] bg-[#f6f2f1]"
            />
            {errors.venue && <p className="text-red-500 text-sm">{errors.venue}</p>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-[10px] bg-[#f6f2f1]"
              placeholder="Message"
            ></textarea>
          </div>

          <div>
            <button type="submit" className="px-5 py-2 bg-black text-white raleway-font">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;