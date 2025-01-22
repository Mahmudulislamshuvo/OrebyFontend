import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Validations/Schema/LoginYupSchema";
import { axiosinstance } from "../../helpers/axios";
import { SuccessToast } from "../../helpers/Toastify";

const SignUp = () => {
  const [eye, seteye] = useState(false);
  const [signupInfo, setsignupInfo] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleSignup = (e) => {
    const { id, value } = e.target;
    setsignupInfo({
      ...signupInfo,
      [id]: id === "agree" ? !signupInfo.agree : value,
    });
  };

  // Validation with Yup Schema and Formik
  const formik = useFormik({
    initialValues: signupInfo,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Taufik vaiya ways to Handle Signup Button
  // const handleSignup = async () => {
  //   try {
  //     const { firstName, phone, email, passoword, confrimPassword } =
  //       singupInfo;
  //     if (!firstName || !phone || !email || !passoword || !confrimPassword) {
  //       alert("Credential Missing");
  //     } else if (passoword !== confrimPassword) {
  //       alert("Password Not Match");
  //     } else {
  //       setloading(true);
  //       const resposne = await axiosInstace.post("/auth/registration", {
  //         firstName: firstName,
  //         email: email,
  //         mobile: phone,
  //         password: passoword,
  //       });
  //       if (resposne.statusText == "OK") {
  //         successToast(`${firstName} ${resposne.data?.message}`);
  //       }
  //     }
  //   } catch (error) {
  //     // const { message } = error.resposne?.data;
  //     console.error("Error from singup ", error);
  //     errorToast(`${error.response.data.message}`);
  //   } finally {
  //     setloading(false);
  //     setsingUpInfo({
  //       firstName: "",
  //       phone: "",
  //       email: "",
  //       passoword: "",
  //       confrimPassword: "",
  //       agree: false,
  //     });
  //   }
  // };
  // todo: Handle Sign Up Button
  const HandleSignUpBtn = async () => {
    const { firstName, email, mobile, password, confirmPassword, agree } =
      formik.values;
    if (password !== confirmPassword) {
      alert("Password Mismatched");
      return;
    }
    try {
      const response = await axiosinstance.post("/auth/resgistration", {
        firstName: firstName,
        email: email,
        mobile: mobile,
        password: password,
        confirmPassword: confirmPassword,
      });
      if (response.statusText == "Created") {
        SuccessToast(`${firstName} ${response?.data?.message}`);
      }
      console.log(response);
    } catch (error) {
      console.log("error from axios", error);
    } finally {
      setsignupInfo({
        firstName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        agree: null,
      });
      formik.resetForm();
    }
  };
  return (
    <div className="container">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Sign Up Illustration"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
                <span className="sr-only font-poppins">Home</span>
                {/* Add your logo SVG or image here */}
              </a>

              <h1 className="mt-6 font-poppins text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h1>

              <p className="mt-4 font-poppins leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>

              <form
                action="#"
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={formik.handleSubmit}
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block font-poppins text-sm font-medium text-gray-700"
                  >
                    First Name <span className="text-red_DB4444">*</span>
                  </label>
                  <input
                    // value={signupInfo.firstName}
                    value={formik.values.firstName}
                    onChange={(handleSignup, formik.handleChange)}
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white font-poppins text-sm text-gray-700 shadow-xl"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <span className="text-red-500">
                      {formik.errors.firstName}
                    </span>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block font-poppins text-sm font-medium text-gray-700"
                  >
                    Mobile Number<span className="text-red_DB4444">*</span>
                  </label>
                  <input
                    // value={signupInfo.mobile}
                    value={formik.values.mobile}
                    onChange={(handleSignup, formik.handleChange)}
                    type="text"
                    id="mobile"
                    name="mobile"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xl"
                  />
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <span className="text-red-500">{formik.errors.mobile}</span>
                  ) : null}
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block font-poppins text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-red_DB4444">*</span>
                  </label>
                  <input
                    // value={signupInfo.email}
                    value={formik.values.email}
                    onChange={(handleSignup, formik.handleChange)}
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xl"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="text-red-500">{formik.errors.email}</span>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block font-poppins text-sm font-medium text-gray-700"
                  >
                    Password <span className="text-red_DB4444">*</span>
                  </label>
                  <input
                    // value={signupInfo.password}
                    value={formik.values.password}
                    onChange={(handleSignup, formik.handleChange)}
                    type={eye ? "text" : "password"}
                    id="password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xl"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span className="text-red-500">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block font-poppins text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                    <span className="text-red_DB4444">*</span>
                  </label>
                  <input
                    // value={signupInfo.confirmPassword}
                    value={formik.values.confirmPassword}
                    onChange={(handleSignup, formik.handleChange)}
                    type={eye ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="reletive mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xl"
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <span className="text-red-500">
                      {formik.errors.confirmPassword}
                    </span>
                  ) : null}
                  <span
                    className="absolute cursor-pointer"
                    onClick={() => seteye(!eye)}
                  >
                    {eye ? <IoIosEyeOff /> : <IoIosEye />}
                  </span>
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      onChange={(handleSignup, formik.handleChange)}
                      value={signupInfo.agree}
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="font-poppins text-sm text-gray-700">
                      I want to receive emails about events, product updates,
                      and company announcements.
                    </span>
                  </label>
                  {formik.touched.agree && formik.errors.agree ? (
                    <span className="text-red-500">{formik.errors.agree}</span>
                  ) : null}
                </div>
                <div className="col-span-6">
                  <p className="font-poppins text-sm text-gray-500">
                    By creating an account, you agree to our
                    <Link className="text-gray-700 underline">
                      terms and conditions
                    </Link>
                    and
                    <Link className="text-gray-700 underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    onClick={HandleSignUpBtn}
                    type="submit"
                    className="inline-block shrink-0 rounded-md border bg-red_DB4444 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>
                  <p className="mt-4 font-poppins text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link
                      to={"/login"}
                      className="ml-4 font-poppins text-gray-700 underline"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
