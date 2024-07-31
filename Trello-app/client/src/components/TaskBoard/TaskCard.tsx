'use client'

import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Task } from '@/types'
import { format } from 'date-fns'
import CreateTaskModal from './CreateTaskModal'

interface TaskCardProps {
  task: Task
  index: number
}

export default function TaskCard({ task, index }: TaskCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Low':
        return 'bg-green-200 text-green-800'
      case 'Medium':
        return 'bg-yellow-200 text-yellow-800'
      case 'Urgent':
        return 'bg-red-200 text-red-800'
      default:
        return 'bg-gray-200 text-gray-800'
    }
  }

  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-gray-100 p-4 mb-2 rounded-md shadow-sm cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <h4 className="font-bold mb-2">{task.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
            <div className="flex justify-between items-center text-xs">
              <span className={`px-2 py-1 rounded-full ${getPriorityColor(task.priority || '')}`}>
                {task.priority || 'No priority'}
              </span>
              {task.deadline && (
                <span className="text-gray-500">
                  {format(new Date(task.deadline), 'MMM d, yyyy')}
                </span>
              )}
            </div>
          </div>
        )}
      </Draggable>
      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={task}
      />
    </>
  )
}
