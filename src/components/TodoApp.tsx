import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";
import { Todo } from "../types/todo";
import { motion } from "framer-motion";

type FilterType = "all" | "completed" | "pending";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("todos");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setTodos(parsed);
        }
      }
    } catch (err) {
      console.error("Failed to parse localStorage todos", err);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isInitialized]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? todo.completed
      : !todo.completed
  );

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
          Todo App
        </Typography>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AddTodo onAdd={addTodo} />
          <Filter filter={filter} setFilter={setFilter} />
        </motion.div>
        <Box mt={2}>
          <TodoList
            todos={filteredTodos}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default TodoApp;
