import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import SongPage from "./pages/SongPage";
import SongUpdatePage from "./pages/SongUpdatePage";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <SongPage />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <span>;likuj</span>
          </Layout>
        }
      />

      <Route
        path="/update/:id"
        element={
          <Layout>
            <SongUpdatePage />
          </Layout>
        }
      />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default AppRoutes;
