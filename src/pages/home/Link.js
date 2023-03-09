import Request from "../request/Request";
import RequestDetails from "../request/RequestDetails";
import RequestWrite from "../request/RequestWrite";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Link() {
  return (
    <BrowserRouter>
      {/* <nav style={{ textAlign: "center" }}>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/request"
        >
          Request
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/request-details"
        >
          RequestDetails
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/request-write"
        >
          RequestWrite
        </NavLink>
      </nav> */}
      <Routes>
        <Route path="/request" element={<Request />} />
        <Route path="/request-details" element={<RequestDetails />} />
        <Route path="/request-write" element={<RequestWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Link;
