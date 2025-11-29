import { useState } from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks(prev => [...prev, task]);
  const editTask = (updatedTask: Task) => setTasks(prev => prev.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  const deleteTask = (id: string) => setTasks(prev => prev.filter(task => task.id !== id));

  return { tasks, addTask, editTask, deleteTask };
};