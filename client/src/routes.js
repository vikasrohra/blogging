import { createBrowserRouter } from "react-router-dom";
import Feed from "./components/Feed";
import Home from "./components/Home";
import Main from "./components/Main";
import Memories from "./components/Memories";
import Onboard from "./components/Onboard";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
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
