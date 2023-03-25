import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages";
import GlobalLoader from "../components/common/GlobalLoader/GlobalLoader";
import ErrorPage from "../pages/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage";
import { NAVIGATION_ROUTES } from "./constants";

export const router = createBrowserRouter([
    {
        path: NAVIGATION_ROUTES.HOME,
        element: <Home/>
    },
    {
        path: NAVIGATION_ROUTES.LOGIN,
        element: <GlobalLoader />

    },
    {
        path: NAVIGATION_ROUTES.REST,
        errorElement: <ErrorPage></ErrorPage>,
        element: <NotFoundPage></NotFoundPage>,
    },
]);
