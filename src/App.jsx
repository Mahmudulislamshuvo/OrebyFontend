import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={"this is main Route"} />
      <Route path="/home" element={"this is home"} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
