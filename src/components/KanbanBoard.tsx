import React from 'react';
import { Task } from '../hooks/useTasks';

interface KanbanBoardProps {
  tasks: Task[];
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  return (
    <div className="kanban-board">
      {/* Kanban board implementation goes here */}
    </div>
  );
};