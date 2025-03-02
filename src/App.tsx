import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./components/routes/routes";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
