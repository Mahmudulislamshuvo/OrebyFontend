import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import RootMainLayout from "./Components/RootLayout/RootMainLayout";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import WhitelistPage from "./Pages/WhitlistPage/WhitelistPage";
import AddtoCartPage from "./Pages/AddToCartPage/AddtoCartPage";
import MyaccountPage from "./Pages/MyaccountPage/MyaccountPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import SignUp from "./Pages/SignUp/SignUp";
import ErrorPage from "./Pages/ErrorPage/EroorPage";
import Otpverify from "./Pages/OtpVerifyPage/Otpverify";
import Paymentfailed from "./Pages/Paymentfailed/Paymentfailed";
import PaymentSuccess from "./Pages/PaymentSuccess/PaymentSuccess";
import PaymentCancelled from "./Pages/PaymentCancel/PaymentCancel";
import OrderPage from "./Pages/OrderPage/OrderPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/about" element={<ProductPage />}></Route>
        <Route
          path="/productdetails/:id"
          element={<ProductDetailsPage />}
        ></Route>
        <Route path="/productdetails" element={<ProductPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/whitelist" element={<WhitelistPage />}></Route>
        <Route path="/addtocart" element={<AddtoCartPage />}></Route>
        <Route path="/account" element={<MyaccountPage />}></Route>
        <Route path="/aboutus" element={<AboutPage />}></Route>
        <Route path="/contactus" element={<ContactUsPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/otp-verify/:email" element={<Otpverify />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/payment/failed" element={<Paymentfailed />}></Route>
        <Route path="/payment/success" element={<PaymentSuccess />}></Route>
        <Route path="/payment/canceled" element={<PaymentCancelled />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Route>
    </Route>,
  ),
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Homepage />
//       </div>
//     ),
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
