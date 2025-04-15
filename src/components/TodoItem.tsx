import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Delete, Edit, Save, Close } from "@mui/icons-material";
import { Todo } from "../types/todo";
import { motion } from "framer-motion";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim()) {
      onEdit(todo.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />

        {isEditing ? (
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
            size="small"
            sx={{ flex: 1, mx: 1 }}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{
              flex: 1,
              textDecoration: todo.completed ? "line-through" : "none",
              mx: 1,
            }}
          >
            {todo.text}
          </Typography>
        )}

        {isEditing ? (
          <IconButton onClick={handleSave}>
            <Save />
          </IconButton>
        ) : (
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
        )}

        <IconButton
          edge="end"
          aria-label={isEditing ? "cancel" : "delete"}
          onClick={() => {
            if (isEditing) {
              setIsEditing(false);
              setEditedText(todo.text);
            } else {
              onDelete(todo.id);
            }
          }}
        >
          {isEditing ? <Close /> : <Delete />}
        </IconButton>
      </ListItem>
    </motion.div>
  );
};

export default TodoItem;
