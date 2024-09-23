import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "src/app/routes/Home";
import MessageStatusPage from "src/app/routes/MessageStatusPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "status",
    element: <MessageStatusPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
