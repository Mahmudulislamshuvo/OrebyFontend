import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginYupSchema } from "../../Validations/Schema/LoginYupSchema";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { axiosinstance } from "../../helpers/axios";
import { ErrorToast, SuccessToast } from "../../helpers/Toastify.js";
import { useNavigate } from "react-router-dom";

const LoginDetails = () => {
  const navigate = useNavigate();
  const [eye, seteye] = useState(false);

  const InitialState = {
    emailorPhone: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: InitialState,
    validationSchema: LoginYupSchema,
    onSubmit: async (values) => {
      try {
        const loginData = await axiosinstance.post("/auth/login", {
          emailOrphone: values.emailorPhone,
          password: values.password,
        });
        if (loginData.statusText === "OK") {
          SuccessToast(loginData.data.message);
          navigate("/");
        }
      } catch (error) {
        console.log("Error from Formik LoginPage", error.response.data.message);
        ErrorToast(error.response.data.message);
      } finally {
        // Clear form data
        formik.resetForm();
      }
    },
  });

  return (
    <div>
      <div className="">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log in to Exclusive
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="emailorPhone"
                    id="emailorPhone"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.emailorPhone}
                  />

                  {formik.touched.emailorPhone && formik.errors.emailorPhone ? (
                    <span className="text-red-500">
                      {formik.errors.emailorPhone}
                    </span>
                  ) : null}
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={eye ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {eye ? (
                    <span
                      className="absolute right-3 top-[68%] -translate-y-[50%] cursor-pointer text-gray-500"
                      onClick={() => seteye(!eye)}
                    >
                      <IoEye />
                    </span>
                  ) : (
                    <span
                      onClick={() => seteye(!eye)}
                      className="absolute right-3 top-[68%] -translate-y-[50%] cursor-pointer text-gray-500"
                    >
                      <IoMdEyeOff />
                    </span>
                  )}

                  {formik.touched.password && formik.errors.password ? (
                    <span className="text-red-500">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-red_DB4444 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/signup"}
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
