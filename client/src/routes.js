import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Onboard from "./components/Onboard";
import { lazy, Suspense } from "react";
import FeedCardSkeleton from "./components/FeedCardSkeleton";

const Feed = lazy(() => import("./components/Feed"));
const Memories = lazy(() => import("./components/Memories"));

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
        element: (
          <Suspense fallback={<FeedCardSkeleton showFilters={true} />}>
            <Feed />
          </Suspense>
        ),
      },
      {
        path: "/memories", // /memories
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Memories />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/onboard",
    element: <Onboard />,
  },
]);
