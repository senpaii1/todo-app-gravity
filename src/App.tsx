import React from "react";
import TodoApp from "./components/TodoApp";
import { IconButton, Box } from "@mui/material";
import { Brightness4 } from "@mui/icons-material";

interface AppProps {
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ toggleTheme }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 4, pt: 2 }}>
        <IconButton onClick={toggleTheme}>
          <Brightness4 />
        </IconButton>
      </Box>
      <TodoApp />
    </Box>
  );
};

export default App;
