import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Home from "./components/Home";
import Main from "./components/Main";
import Memories from "./components/Memories";

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
    path: "/login",
    element: <Login />,
  },
]);
