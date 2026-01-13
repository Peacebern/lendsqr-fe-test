
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login.tsx";
import Users from "pages/Users.tsx";
import UserDetails from "pages/UserDetails.tsx";
import Layout from "layout/Layout.tsx";

function App() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login page WITHOUT sidebar & navbar */}
      <Route path="/login" element={<Login />} />

      {/* All pages WITH sidebar & navbar */}
      <Route element={<Layout />}>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
