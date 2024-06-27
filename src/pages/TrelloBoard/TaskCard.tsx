import Button from 'components/Button'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Task } from 'utils/types'
import Rating from 'components/Rating'
import FollowedButton from 'components/FollowedButton'
import PriorityIcon from 'components/PriorityIcon'

interface Props {
  task: Task
  index: number
}

const TaskCard: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-4 bg-white rounded-lg shadow-md ${snapshot.isDragging ? 'bg-blue-100' : ''}`}
        >
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-row justify-start items-start space-x-2">
              <img src={task.avatar} alt={task.name} className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col justify-start items-start gap-0">
                <div className="flex flex-row justify-between items-center space-x-2">
                  <PriorityIcon priority={task.priority} />
                  <h4 className="font-semibold text-gray-900">{task.name}</h4>
                  {task.status === 'new' && <Button text="New" showPlusIcon={false} />}
                </div>
                <p className="text-sm font-medium text-gray-400">{task.location}</p>
              </div>
            </div>
            <div className=" flex flex-row justify-start items-center gap-2">
              <Rating rating={task.rating} />
              <div className="flex flex-row justify-start items-center space-x-2.5">
                <p className="text-sm font-medium text-gray-400">{task.phone}</p>
                {task.isFollowed && <FollowedButton />}
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
