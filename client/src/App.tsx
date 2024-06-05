import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Register } from "./pages/Register/Register.tsx";
import classes from "./app.module.scss";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
  const location = useLocation();
  const disableNavigationPath = ["/login", "/register"];
  const isNav = disableNavigationPath.includes(location.pathname);

  return (
    <>
      {!isNav && <Navigation />}
      <div className={`${classes.root} ${isNav && classes.removeMargin}`}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
