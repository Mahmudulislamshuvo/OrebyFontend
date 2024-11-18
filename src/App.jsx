import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/RootLayout/Header";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={"this is main Route"} />
//       <Route path="/home" element={"this is home"} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
