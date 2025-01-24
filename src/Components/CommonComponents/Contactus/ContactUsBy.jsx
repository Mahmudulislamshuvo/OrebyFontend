import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useFormik } from "formik";
import { ContactusYupSchema } from "../../../Validations/Schema/LoginYupSchema";
import { axiosinstance } from "../../../helpers/axios";
import { SuccessToast } from "../../../helpers/Toastify";

const ContactUsBy = () => {
  // Formik things
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactusYupSchema,
    onSubmit: async (values, action) => {
      try {
        const response = await axiosinstance.post("/contact", values);
        SuccessToast(response.data.message);
      } catch (error) {
        console.log("error from Contact us submittion", error);
      } finally {
        action.resetForm();
      }
    },
  });
  // Formik things end

  return (
    <div className="container">
      <div className="flex">
        {/* contact us Left Design */}
        <div className="mr-[30px] basis-1/4 px-[35px] py-[40px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="border-b-2 border-[#000]">
            <div className="flex items-center gap-x-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red_DB4444 text-center text-whiteColor">
                <FiPhoneCall />
              </span>
              <p className="font-poppins text-base font-medium">Call To Us</p>
            </div>
            <div className="pb-8 pt-6">
              <p className="font-poppins text-sm text-text2_black_full">
                We are available 24/7, 7 days a week.
              </p>
              <p className="pt-4 font-poppins text-sm text-text2_black_full">
                Phone: +8801611112222
              </p>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex items-center gap-x-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red_DB4444 text-center text-whiteColor">
                <MdOutlineMailOutline />
              </span>
              <p className="font-poppins text-base font-medium">Write To US</p>
            </div>
            <div className="pb-8 pt-6">
              <p className="font-poppins text-sm text-text2_black_full">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="pt-4 font-poppins text-sm text-text2_black_full">
                Emails: customer@exclusive.com
              </p>
              <p className="pt-4 font-poppins text-sm text-text2_black_full">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
        {/* contact us Left Design end */}
        {/* contact us Right Design */}
        <div className="basis-2/3 px-8 py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex items-center gap-x-4">
            <div>
              <input
                type="text"
                placeholder="Input Your Name"
                id="name"
                name="name"
                className="w-[235px] rounded bg-whitesmoke_F5F5F5 px-4 py-[13px]"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="mt-2 text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                placeholder="Input Your Email"
                id="email"
                name="email"
                className="w-[235px] rounded bg-whitesmoke_F5F5F5 px-4 py-[13px]"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                placeholder="Input Your Phone"
                id="phone"
                name="phone"
                className="w-[235px] rounded bg-whitesmoke_F5F5F5 px-4 py-[13px]"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div className="text-red-500">{formik.errors.phone}</div>
              ) : null}
            </div>
          </div>
          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            className="mt-[45px] min-h-[50%] w-[93.4%] overflow-hidden rounded bg-whitesmoke_F5F5F5 p-4 text-start font-poppins"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {formik.errors.message && formik.touched.message ? (
            <div className="text-red-500">{formik.errors.message}</div>
          ) : null}
          <form onSubmit={formik.handleSubmit}>
            <div className="mr-[6.6%] mt-8 text-end">
              <button
                type="submit"
                className="rounded bg-red_DB4444 px-12 py-4 font-poppins font-medium text-whiteColor"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* contact us Right Design end */}
      </div>
    </div>
  );
};

export default ContactUsBy;
