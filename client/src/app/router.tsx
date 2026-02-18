import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import LabCatalog from "../pages/LabCatalog";
import LabOverview from "../pages/LabOverview";
import Session from "../pages/Session";

export const router = createBrowserRouter([
    { path: "/", element: <LabCatalog /> },
    { path: "/login", element: <Login /> },
    { path: "/labs", element: <LabCatalog /> },
    { path: "/labs/:labId", element: <LabOverview /> },
    { path: "/session/:sessionId", element: <Session /> },
]);
