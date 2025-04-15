import React from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

interface FilterProps {
  filter: "all" | "completed" | "pending";
  setFilter: (filter: "all" | "completed" | "pending") => void;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <Box mt={2} display="flex" justifyContent="center">
      <ToggleButtonGroup
        color="primary"
        value={filter}
        exclusive
        onChange={(_, newFilter) => {
          if (newFilter) setFilter(newFilter);
        }}
        sx={{ gap: 1 }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="pending">Pending</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default Filter;
