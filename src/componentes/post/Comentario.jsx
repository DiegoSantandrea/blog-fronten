import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";

export const CommentForm = ({ onSubmit }) => {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !text) return;
        onSubmit({ username, text, date: new Date().toISOString() });
        setUsername("");
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form-container">
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="dense"
                required
            />
            <TextField
                label="Comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                margin="dense"
                multiline
                rows={4}
                required
            />
            <Button type="submit" variant="outlined" fullWidth>
                Post Comment
            </Button>
        </form>
    );
};

CommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};