import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { store } from "./store";

import Today from "./pages/today";
import Upcoming from "./pages/upcoming";
import Someday from "./pages/someday";

import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="today" replace />} />
        <Route path="today" element={<Today />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="someday" element={<Someday />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
