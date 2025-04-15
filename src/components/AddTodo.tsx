import React, { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          label="Add a task"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <IconButton
          onClick={handleAdd}
          color="primary"
          sx={{ bgcolor: "#1976d2", color: "#fff" }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </motion.div>
  );
};

export default AddTodo;
