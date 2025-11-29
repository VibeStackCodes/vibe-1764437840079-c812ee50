import React, { useState } from 'react';
import { Task } from '../hooks/useTasks';
import { validateInput } from '../utils/validateInput';

interface TaskFormProps {
  initialTask?: Task;
  onSubmit: (task: Task) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ initialTask, onSubmit }) => {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput(title, description)) {
      onSubmit({ id: initialTask?.id || Date.now().toString(), title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task Title" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Task Description" />
      <button type="submit">Save</button>
    </form>
  );
};