import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./components/routes/routes";
import ProtectRoutes from "./components/routes/protect-routes";
import { Toaster } from "react-hot-toast";
import PublicRoutes from "./components/routes/public-routes";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {publicRoutes.map(({ layout, component, path }, index) => (
          <Route
            key={index}
            path={path}
            element={<PublicRoutes component={component} layout={layout} />}
          />
        ))}

        {privateRoutes.map(({ layout, component, path }, index) => (
          <Route
            key={index}
            path={path}
            element={<ProtectRoutes component={component} layout={layout} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
