// StarRating.js
import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function StarRating({ value: initialValue, onChange }) {
  const [value, setValue] = useState(initialValue);
  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
    console.log("Star rating:", newValue);
  };

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Rate this response</Typography>
      <Rating
        name="custom-rating"
        value={value}
        onChange={handleRatingChange}
      />
    </Box>
  );
}

export default StarRating;
