import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { PostCard } from "./PostCard";

export const Posts = ({ posts }) => {
    const navigate = useNavigate();

    const navigateToPostHandler = (pid) => {
        navigate(`/post/${pid}`);
    };

    return (
        <div className="posts-container">
            {posts.map((p) => (
                <PostCard
                    key={p.pid}
                    pid={p.pid}
                    title={p.title}
                    course={p.course}
                    navigateToPostHandler={navigateToPostHandler}
                />
            ))}
        </div>
    );
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            pid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            course: PropTypes.string.isRequired,
        })
    ).isRequired,
};