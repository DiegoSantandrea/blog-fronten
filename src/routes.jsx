import { PostView } from "./components/post/PostView";
import { DashboardPage } from "./pages/dashboard";
import { getPosts } from "./services";

export const routes = [
    { path: '/*', element: <DashboardPage /> },
    { path: "/post/:pid", element: <PostView getPosts={getPosts} /> }
];