import { createHashRouter } from "react-router-dom";
import Main from "./components/Main";
import Onboard from "./components/Onboard";
import { lazy, Suspense } from "react";
import FeedCardSkeleton from "./components/FeedCardSkeleton";

const Home = lazy(() => import("./components/Home"));
const Feed = lazy(() => import("./components/Feed"));
const Memories = lazy(() => import("./components/Memories"));
const Profile = lazy(() => import("./components/Profile"));

export const appRouter = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Home />
      </Suspense>
    ),
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
    ],
  },
  {
    path: "/memories", // /memories
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Memories />
      </Suspense>
    ),
  },
  {
    path: "/onboard",
    element: <Onboard />,
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Profile />
      </Suspense>
    ),
  },
]);
