import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePageError from "./pages/SinglePageError";
import Error from "./pages/Error";
import SingleHotelPage from "./pages/SingleHotelPage";
import HomeLayout from "./pages/HomeLayout";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/property/:id",
        element: <SingleHotelPage />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
