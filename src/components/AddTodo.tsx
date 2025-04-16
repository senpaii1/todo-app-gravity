import React, { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();

    if (!trimmed) {
      setError("Task cannot be empty");
      return;
    }

    if (trimmed.length < 3) {
      setError("Task must be at least 3 characters long");
      return;
    }

    onAdd(trimmed);
    setText("");
    setError("");
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Box display="flex" gap={2} alignItems="flex-start">
        <TextField
          label="Add a task"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          error={!!error}
          helperText={error}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            pt: 0.3,
          }}
        >
          <IconButton
            onClick={handleAdd}
            sx={{
              bgcolor: "#1976d2",
              color: "#fff",
              width: 48,
              height: 48,
              borderRadius: "50%",
              "&:hover": {
                bgcolor: "#115293",
              },
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AddTodo;
