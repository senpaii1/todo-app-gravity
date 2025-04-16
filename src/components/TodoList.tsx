import React from "react";
import { List, Typography, Box } from "@mui/material";
import { Todo } from "../types/todo";
import { motion, AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
  onEdit,
}) => {
  return (
    <List>
      <AnimatePresence>
        {todos.length === 0 ? (
          <Box textAlign="center" mt={4}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="h6" color="textSecondary">
                No tasks today 🎉
              </Typography>
            </motion.div>
          </Box>
        ) : (
          todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <TodoItem
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </List>
  );
};

export default TodoList;
