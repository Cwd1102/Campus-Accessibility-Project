import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "./firebase";

import UmbcNavbar from "./components/UmbcNavbar";
import Homepage from "./Mapping/Homepage.tsx";
import About from "./components/About";
import Surveypage from "./components/Surveypage";
import ReportObstruction from "./components/ReportObstruction";
import LoginPage from "./components/LoginPage";
import ManageObstruction from "./components/ManageObstruction.tsx";
import ViewSurvey from "./components/ViewSurvey";
import ApplyObstruction from "./Mapping/ApplyObstruction.tsx"
//import RequireAuth from "./components/RequireAuth";

// local wrapper to guard protected pages
function RequireAuth({ children }: { children: React.ReactNode}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // while we don't know yet, don't flash the page
  if (loading) {
    return <div>Loading...</div>;
  }

  // if not logged in, kick them to LoginPage route
  if (!user) {
    return <Navigate to="/LoginPage" replace />;
  }

  // otherwise allow access
  return children;
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UmbcNavbar />, // layout with navbar
      children: [
        { index: true, element: <Homepage /> }, // this is now the default page
        {path: "homepage", element: <Homepage /> },
        { path: "about", element: <About /> },
        { path: "survey", element: <Surveypage /> },
        {path: "ReportObstruction", element: <ReportObstruction />},
        {path: "LoginPage", element: <LoginPage /> },
        //{path: "ManageObstruction", element: <ManageObstruction /> }
        {
          path: "ManageObstruction",
          element: (
            <RequireAuth>
              <ManageObstruction />
            </RequireAuth>
          ),
        },
        {
          path: "ViewSurvey",
          element: (
            <RequireAuth>
              <ViewSurvey />
            </RequireAuth>
          ),
        },

         {
          path: "ApplyObstruction",
          element: (
            <RequireAuth>
              <ApplyObstruction />
            </RequireAuth>
          ),
        },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

