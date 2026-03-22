import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { LandAnalysis } from "./pages/LandAnalysis";
import { Dashboard } from "./pages/Dashboard";
import { AgroConsult } from "./pages/AgroConsult";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "analisis", Component: LandAnalysis },
      { path: "dashboard", Component: Dashboard },
      { path: "konsultasi", Component: AgroConsult },
    ],
  },
]);
