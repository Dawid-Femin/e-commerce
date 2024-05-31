import classes from "./app.module.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>,
    ),
  );
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

const Root = () => {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <div className={classes.root}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
