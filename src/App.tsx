import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./components/routes/routes";
import ProtectRoutes from "./components/routes/protect-routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {publicRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return (
            <Route
              key={index}
              path={path}
              element={<Layout children={<Component />} />}
            />
          );
        })}

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
