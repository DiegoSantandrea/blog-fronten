import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import { Posts } from "../post/Posts";
import { PostView } from "../post/PostView";

export const Content = ({ posts, getPosts }) => {
    return (
        <div className="content main-content">
            <Routes>
                <Route
                    path="/"
                    element={<Posts posts={posts} />}
                />
                <Route
                    path="/:pid"
                    element={<PostView getPosts={getPosts} />}
                />
            </Routes>
        </div>
    )
}

Content.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            pid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            course: PropTypes.string.isRequired,
        })
    ).isRequired,
    getPosts: PropTypes.func.isRequired,
};