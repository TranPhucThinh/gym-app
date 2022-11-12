import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <Box sx={{ mt: { lg: '30px', xs: '0' } }} p="20px">
      <Typography variant="h3" mb={5} fontWeight="700">
        Similar <span style={{ color: 'red' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercise.length ? (
          <HorizontalScrollbar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb={5} fontWeight="700" mt="50px">
        Exercises that use <span style={{ color: 'red' }}>Equipment</span> the
        same equipment
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercise.length ? (
          <HorizontalScrollbar data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
