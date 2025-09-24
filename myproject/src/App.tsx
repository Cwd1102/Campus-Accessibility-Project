import UmbcNavbar from "./components/UmbcNavbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Surveypage from "./components/Surveypage";

export default function App() {
  // Define button labels + descriptions inside
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UmbcNavbar />, // layout with navbar
      children: [{ index: true, element: <Homepage />, path: "homepage" }, { path: "about", element: <About /> }, { path: "survey", element: <Surveypage /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
