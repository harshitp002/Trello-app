'use client'

import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Task } from '@/types';
import TaskCard from './TaskCard';
import CreateTaskModal from './CreateTaskModal';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-md">
      <h3 className="font-bold mb-4">{title}</h3>
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="min-h-[200px]"
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-2 px-4 py-2 bg-black text-white rounded-lg border"
            >
              Add New +
            </button>
          </div>
        )}
      </Droppable>
      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        columnStatus={title}
      />
    </div>
  );
};

export default TaskColumn;