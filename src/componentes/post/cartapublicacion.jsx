import PropTypes from "prop-types";

export const PostDescription = ({
    title,
    content,
    course,
    comments,
    date
    }) => {
        return (
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
                <p><strong>Course:</strong> {course}</p>
                <p><strong>Date:</strong> {date}</p>
                <div>
                    <h2>Comments</h2>
                    {comments.map((comment, index) => (
                        <div key={index} className="comment-box">
                            <p><strong>User </strong> {comment.username}</p>
                            <p><strong>Text </strong> {comment.text}</p>
                            <p><strong>Date </strong> {comment.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
};

PostDescription.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
    date: PropTypes.string.isRequired,
};