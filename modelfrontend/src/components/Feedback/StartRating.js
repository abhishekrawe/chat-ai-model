// StarRating.js
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function StarRating({ value, onChange }) {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Rate this response</Typography>
      <Rating name="custom-rating" value={value} onChange={onChange} />
    </Box>
  );
}

export default StarRating;
