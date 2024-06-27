export type PriorityEnum = 'high' | 'medium' | 'low'

export interface Task {
  id: string
  name: string
  location: string
  phone: string
  avatar: string
  status: 'new' | 'rejected'
  isFollowed: boolean
  rating: number
  priority: PriorityEnum
}

export type ColumnIDsEnum = 'applied' | 'shortlisted' | 'interview'

export interface Column {
  // id: string
  id: ColumnIDsEnum
  title: string
  tasks: Task[]
}
