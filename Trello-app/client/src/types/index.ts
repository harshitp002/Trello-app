export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'To do' | 'In progress' | 'Under review' | 'Completed';
  priority?: 'Low' | 'Medium' | 'Urgent';
  deadline?: Date;
  createdAt: Date;
}