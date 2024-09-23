import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MessageStatusPage from "./Pages/MessageStatusPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/status",
    element: <MessageStatusPage />,
  },
]);

function App() {
  return (
    <div className="font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
