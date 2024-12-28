import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import RootMainLayout from "./Components/RootLayout/RootMainLayout";
import PracticeBreadCrumb from "./Components/CommonComponents/PracticeBreadCrumb";
import ProductPage from "./Pages/ProductsPage/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/about" element={<ProductPage />}></Route>
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
