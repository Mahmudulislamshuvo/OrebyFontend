import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SuccessToast } from "../../../helpers/Toastify";
import { useGetusercartItemQuery } from "../../../Features/Api/exclusiveApi";
import { axiosinstance } from "../../../helpers/axios";
import CheckoutSkeleton from "../Skeletons/CheckoutSkeliton";

const Checkout = () => {
  const { isLoading, data, iserror } = useGetusercartItemQuery();

  const CartItemUserDetails = data?.data?.AllcartItem[0]?.user;
  // get data from Local storage
  const userinfoFromLocal = JSON.parse(localStorage.getItem("user"));

  // Dummy cart data
  const dummyCart = {
    cartITem: [
      {
        product: {
          name: "Premium Sneakers",
          price: 129.99,
          image: ["https://example.com/sneakers.jpg"],
        },
        size: "10",
        quantity: 2,
      },
      {
        product: {
          name: "Casual T-Shirt",
          price: 29.99,
          image: ["https://example.com/tshirt.jpg"],
        },
        size: "M",
        quantity: 1,
      },
    ],
    totalamount: 289.97,
  };

  const [loading, setloading] = useState(false);
  const [dataField] = useState([
    "address1",
    "address2",
    "town",
    "district",
    "postalcode",
  ]);

  const [userField] = useState(["firstName", "email", "mobile"]);

  // Dummy user data
  const [userinfo, setUserinfo] = useState({
    firstName: userinfoFromLocal?.firstName,
    email: userinfoFromLocal?.email,
    mobile: userinfoFromLocal?.mobile,
    address1: "123 Main St",
    address2: "Apt 4B",
    town: "Springfield",
    division: "Central",
    postalcode: "12345",
    country: "USA",
    payementmethod: "online",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: value,
    });
  };

  const handleOnlinePayment = () => {
    setUserinfo({
      ...userinfo,
      payementmethod: "online",
    });
  };

  const handleOnlineCashOnDelivery = () => {
    setUserinfo({
      ...userinfo,
      payementmethod: "cash",
    });
  };

  // Simulated order placement
  const placeOrder = async () => {
    try {
      setloading(true);
      const response = await axiosinstance.put(
        "/order",
        {
          customerinfo: {
            address1: userinfo.address1,
            address2: userinfo.address2,
            city: userinfo.town,
            division: userinfo.division,
            postCode: userinfo.postalcode,
          },
          paymentinfo: {
            paymentMethod: userinfo.payementmethod || "online",
          },
        },
        { withCredentials: "includes" },
      );

      if (response?.data?.data?.GatewayPageURL) {
        window.location.href = response.data.data.GatewayPageURL;
      } else {
        SuccessToast("Your order Placed Successfully!");
        window.location.href = "/addtocart";
      }
    } catch (error) {
      console.log("error from place order", error);
    } finally {
      setloading(false);
    }
  };

  // on focus clear input values
  const handleFocus = (e) => {
    const { name, value } = e.target;
    if (name !== "firstName" || "email" || "mobile") {
      return;
    } else {
      value = "";
    }
  };

  if (isLoading) {
    return <CheckoutSkeleton />;
  }

  return (
    <div className="container my-10">
      <div className="font-popins bg-white">
        <div className="mx-auto w-full max-lg:max-w-xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="mx-auto w-full max-w-4xl p-6 !pr-0 max-lg:order-1 lg:col-span-2">
              <div className="text-center max-lg:hidden">
                <h2 className="inline-block border-b-2 border-gray-800 pb-1 text-3xl font-bold text-gray-800">
                  Checkout
                </h2>
              </div>

              <form className="lg:mt-16" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Shipping info
                  </h2>

                  <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                    {userField?.map((item, index) => (
                      <div key={index}>
                        <input
                          type={
                            item === "mobile"
                              ? "tel"
                              : item === "email"
                                ? "email"
                                : "text"
                          }
                          name={item}
                          value={userinfo[item]}
                          onChange={handleChange}
                          onFocus={(e) => handleFocus(e)}
                          placeholder={item}
                          className="w-full border-b bg-white px-2 py-3 pb-2 text-sm text-gray-800 outline-none focus:border-blue-600 focus:bg-gray-200"
                        />
                      </div>
                    ))}
                    {dataField?.map((item) => (
                      <div key={item}>
                        <input
                          type={item === "postalcode" ? "number" : "text"}
                          name={item}
                          placeholder={item}
                          value={userinfo[item]}
                          onFocus={(e) => (e.target.value = "")}
                          onChange={handleChange}
                          className="w-full border-b bg-white px-2 py-3 pb-2 text-sm text-gray-800 outline-none focus:border-blue-600 focus:bg-gray-200"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* payment */}
                <div className="mt-16">
                  <h2 className="text-xl font-bold text-gray-800">
                    Payment method
                  </h2>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div
                      className="flex cursor-pointer items-center"
                      onClick={handleOnlinePayment}
                    >
                      {userinfo.payementmethod === "online" ? (
                        <button
                          type="button"
                          className={
                            "rounded-lg border border-current bg-green-700 px-5 py-2.5 text-sm font-medium tracking-wider text-white outline-none hover:bg-green-800 active:bg-green-700"
                          }
                        >
                          Confirm Online Payment
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <img
                            src="https://readymadeui.com/images/visa.webp"
                            className="w-12"
                            alt="card1"
                          />
                          <img
                            src="https://readymadeui.com/images/american-express.webp"
                            className="w-12"
                            alt="card2"
                          />
                          <img
                            src="https://readymadeui.com/images/master.webp"
                            className="w-12"
                            alt="card3"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={handleOnlineCashOnDelivery}
                        className={
                          userinfo.payementmethod === "cash"
                            ? "rounded-lg border border-current bg-green-700 px-5 py-2.5 text-sm font-medium tracking-wider text-white outline-none hover:bg-green-800 active:bg-green-700"
                            : "rounded-lg border border-current bg-red-700 px-5 py-2.5 text-sm font-medium tracking-wider text-white outline-none hover:bg-orange-800 active:bg-orange-700"
                        }
                      >
                        Cash On Delivery
                      </button>
                    </div>
                  </div>
                </div>
                {/* payment end */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to={"/cart"}
                    className="flex min-w-[150px] items-center justify-center rounded-lg bg-gray-200 px-6 py-3.5 text-sm text-gray-800 hover:bg-gray-300"
                  >
                    Back
                  </Link>
                  <button
                    onClick={placeOrder}
                    type="button"
                    className="min-w-[150px] rounded-lg bg-blue-600 px-6 py-3.5 text-sm text-white hover:bg-blue-700"
                  >
                    {loading
                      ? "Processing..."
                      : `Confirm payment $${dummyCart.totalamount}`}
                  </button>
                </div>
              </form>
            </div>

            {/* picture show design */}
            <div className="w-full bg-gray-100 lg:sticky lg:top-0 lg:ml-auto lg:h-screen lg:max-w-[430px]">
              <div className="relative h-full">
                <div className="overflow-auto p-6 max-lg:max-h-[450px] lg:h-[calc(100vh-50px)]">
                  <h2 className="text-xl font-bold text-gray-800">
                    Order Summary
                  </h2>

                  <div className="mt-8 space-y-6">
                    {data?.data?.AllcartItem?.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex h-[100px] w-[124px] shrink-0 items-center justify-center rounded-lg bg-gray-200 p-4">
                          <img
                            src={item.product.image[0]}
                            className="w-full object-contain"
                            alt={item.product.name}
                          />
                        </div>

                        <div className="w-full">
                          <h3 className="w-[80%] truncate text-sm font-bold text-gray-800">
                            {item.product.name}
                          </h3>
                          <ul className="mt-2 space-y-1 text-xs text-gray-800">
                            <li className="flex flex-wrap gap-4">
                              Size <span className="ml-auto">{item.size}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span className="ml-auto">{item.quantity}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span className="ml-auto">
                                $
                                {(item.product.price * item.quantity).toFixed(
                                  2,
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-gray-200 p-4 lg:absolute lg:bottom-0 lg:left-0">
                  <h4 className="flex flex-wrap gap-4 text-sm font-bold text-gray-800">
                    Total{" "}
                    <span className="ml-auto">${dummyCart.totalamount}</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* picture show design end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
