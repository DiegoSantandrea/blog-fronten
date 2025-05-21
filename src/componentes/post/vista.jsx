import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostDetails } from "../../shared/hooks"
import { LoadingSpinner} from "../LoadingSpinner";
import { PostDescription } from "./PostDescription";
import { CommentForm } from "./CommentForm";
import { AddComment } from "../../services";
import PropTypes from "prop-types";

export const PostView = ({ getPosts }) => {
    const { isFetching, getPostDetails, postDetails } = usePostDetails();
    const { pid } = useParams();

    const handleCommentSubmit = async (comment) => {
        const res = await AddComment(postDetails.pid, comment);
        if (!res.error) {
            await getPostDetails(postDetails.pid); 
        }
    };

    useEffect(() => {
        getPostDetails(pid);
    }, [getPostDetails, pid]);

    if (isFetching || !postDetails) {
        return <LoadingSpinner />;
    }

    return (
        <div className="post-container">
            <div className="post-description-section">
                {postDetails.comments?.length === 0 ? (
                    <h1>No comments yet. Be the first to comment!</h1>
                ) : null}
                
                <PostDescription
                    pid={postDetails.pid}
                    title={postDetails.title}
                    content={postDetails.content}
                    course={postDetails.course}
                    comments={postDetails.comments}
                    date={postDetails.date}
                    getPosts={getPosts}
                />
                <CommentForm onSubmit={handleCommentSubmit} />
            </div>
        </div>
    );
};


PostView.propTypes = {
    getPosts: PropTypes.func.isRequired,
};