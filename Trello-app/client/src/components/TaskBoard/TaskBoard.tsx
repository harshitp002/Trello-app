'use client'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { RootState } from '@/store';
import { setTasks, updateTask } from '@/store/slices/taskSlice';
import api from '@/utils/api';
import TaskColumn from './TaskColumn';
import CreateTaskModal from './CreateTaskModal';

const TaskBoard: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, [dispatch]);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const task = tasks.find((t) => t.id === draggableId);
    if (task) {
      const updatedTask = { ...task, status: destination.droppableId as any };
      try {
        const response = await api.put(`/tasks/${task.id}`, updatedTask);
        dispatch(updateTask(response.data));
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Task Board</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Create new task
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-4 gap-1">
          <TaskColumn title="To do" tasks={tasks.filter((t) => t.status === 'To do')} />
          <TaskColumn title="In progress" tasks={tasks.filter((t) => t.status === 'In progress')} />
          <TaskColumn title="Under review" tasks={tasks.filter((t) => t.status === 'Under review')} />
          <TaskColumn title="Completed" tasks={tasks.filter((t) => t.status === 'Completed')} />
        </div>
      </DragDropContext>
      <CreateTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TaskBoard;


