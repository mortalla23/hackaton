import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/full/shared/loadable/Loadable";
import ShowPatient from "../views/intervenants/ShowPatient";
import DetailsCR from "../views/intervenants/DetailsCR";
import AddPatient from "../views/intervenants/AddPatient";
import PatientDocs from "../views/patients/PatientDocs";
import ProfilPatient from "../views/intervenants/ProfilPatient";
import GererPAP from "../views/intervenants/GererPAP";


/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import("../layouts/full/FullLayout")));
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank/BlankLayout"))
);

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import("../views/dashboard/Dashboard")));
const SamplePage = Loadable(
  lazy(() => import("../views/sample-page/SamplePage"))
);
const Icons = Loadable(lazy(() => import("../views/icons/Icons")));
const TypographyPage = Loadable(
  lazy(() => import("../views/utilities/TypographyPage"))
);
const Shadow = Loadable(lazy(() => import("../views/utilities/Shadow")));
const Error = Loadable(lazy(() => import("../views/authentication/Error")));
const Register = Loadable(
  lazy(() => import("../views/authentication/Register"))
);
const Login = Loadable(lazy(() => import("../views/authentication/Login")));
const HomePage = Loadable(lazy(() => import("../views/intervenants/HomePage")));

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/auth/login" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/home", exact: true, element: <HomePage /> },
      { path: "/patient", exact: true, element: <ShowPatient /> },
      { path: "/patient/new", exact: true, element: <AddPatient /> },
      { path: "/patient/CR", exact: true, element: <DetailsCR /> },
      { path: "/patient/doc", exact: true, element: <PatientDocs/> },
      { path: "/profile", exact: true, element: <ProfilPatient/> },
      { path: "/gererPAP", exact: true, element: <GererPAP/> },

    ],
  },
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      { path: "404", element: <Error /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/login", element: <Login /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
];

const MAIN_ROUTES = {
  patients: {
    liste: "",
    info: "",
  },
};

export default Router;
