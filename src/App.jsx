import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={"this is main Route"} />
//       <Route path="/home" element={"this is home"} />
//     </Route>,
//   ),
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Homepage />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
