import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import SongPage from "./pages/SongPage";
import SongUpdatePage from "./pages/SongUpdatePage";
import StatisticsPage from "./pages/StatisticsPage";

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
        path="/statistics"
        element={
          <Layout>
           <StatisticsPage/>
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
