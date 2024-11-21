import { createBrowserRouter } from "react-router-dom";
import Feed from "./components/Feed";
import Home from "./components/Home";
import Main from "./components/Main";
import Memories from "./components/Memories";
import Onboard from "./components/Onboard";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "feed", // /feed
        element: <Feed />,
      },
      {
        path: "/memories", // /memories
        element: <Memories />,
      },
    ],
  },
  {
    path: "/onboard",
    element: <Onboard />,
  },
]);
