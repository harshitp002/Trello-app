import mongoose, { Document, Schema } from 'mongoose'

export interface ITask extends Document {
  title: string
  description?: string
  status: 'To do' | 'In progress' | 'Under review' | 'Completed'
  priority?: 'Low' | 'Medium' | 'Urgent'
  deadline?: Date
  createdAt: Date
  userId: string
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['To do', 'In progress', 'Under review', 'Completed'], default: 'To do' },
  priority: { type: String, enum: ['Low', 'Medium', 'Urgent'] },
  deadline: { type: Date },
  createdAt: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

export default mongoose.model<ITask>('Task', TaskSchema)