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
