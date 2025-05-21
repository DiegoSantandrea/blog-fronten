import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ToggleButton, ToggleButtonGroup, TextField, MenuItem } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SidebarFilter = ({ onFilterChange }) => {
    const [course, setCourse] = useState("");
    const [title, setTitle] = useState("");
    const [order, setOrder] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        const debounce = setTimeout(() => {
            onFilterChange({ course, title, order, startDate, endDate });
        }, 300);

        return () => clearTimeout(debounce);
    }, [course, title, order, startDate, endDate]);

    return (
        <div className="sidebar-container">
            <h1>Filter</h1>
            <TextField
                className="sidebar-title"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="dense"
            />

            <TextField
                className="sidebar-course"
                select
                label="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                fullWidth
                margin="dense"
            >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Workshop">Workshop</MenuItem>
                <MenuItem value="Supervised Practice">Supervised Practice</MenuItem>
            </TextField>

            <ToggleButtonGroup
                value={order}
                exclusive
                onChange={(e, val) => setOrder(val)}
                fullWidth
                className="toggle-group"
            >
                <ToggleButton className="custom-toggle" value="asc">Asc</ToggleButton>
                <ToggleButton className="custom-toggle" value="desc">Desc</ToggleButton>
            </ToggleButtonGroup>

            <DatePicker
                className="datepicker-input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                dateFormat="yyyy-MM-dd"
                isClearable
            />
            <DatePicker
                className="datepicker-input"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                dateFormat="yyyy-MM-dd"
                isClearable
            />
            <button onClick={() => {
                setTitle("");
                setCourse("");
                setStartDate(null);
                setEndDate(null);
                setOrder(null);
                onFilterChange({});
            }}>
                Reset Filters
            </button>
        </div>
        
        
    );
    
};

SidebarFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};