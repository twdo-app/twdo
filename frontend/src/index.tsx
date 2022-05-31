import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./styles/global.css";

import Today from "./pages/today";
import Upcoming from "./pages/upcoming";
import Someday from "./pages/someday";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Settings from "./pages/settings";
import UserSettings from "./pages/user-settings";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="settings" replace />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="settings" element={<Settings />} />
      <Route path="user-settings" element={<UserSettings />} />
    </Routes>
  </BrowserRouter>
);
