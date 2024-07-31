import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User'

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })
    await user.save()

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1d' })
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } })
  } catch (error) {
    res.status(400).json({ message: 'Error creating user' })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1d' })
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } })
  } catch (error) {
    res.status(400).json({ message: 'Error logging in' })
  }
}