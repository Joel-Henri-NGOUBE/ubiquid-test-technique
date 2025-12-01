import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import AddJob from "./features/jobs/pages/Add/Add";
import JobList from "./features/jobs/pages/List/List";
import SetJob from "./features/jobs/pages/Set.tsx/Set";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <JobList />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/set-job/:id",
        element: <SetJob />,
      },
    ],
  },
]);

export default router;
