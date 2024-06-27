import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import TaskCard from './TaskCard'
import { Column as ColumnType, Task } from 'utils/types'
import Button from 'components/Button'
import { ImCheckboxUnchecked } from 'react-icons/im'
import { LuListFilter } from 'react-icons/lu'
import Line from 'components/Line'

interface Props {
  column: ColumnType
}

const Column: React.FC<Props> = ({ column }) => {
  const totalTaskCount = column.tasks.length
  const rejectedTaskCount = column.tasks.filter((task: any) => task.status === 'rejected').length

  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="bg-gray-100 rounded-lg shadow px-2 py-4 flex flex-col space-y-4"
        >
          <div className="flex justify-between items-center gap-1 w-full h-6">
            <div className="flex flex-row justify-start items-center gap-2">
              <ImCheckboxUnchecked size={14} className="text-gray-300" />
              <h3 className="font-bold text-md text-gray-700">{column.title}</h3>
              {column.id === 'applied' && <Button text="Add Applications" showPlusIcon={true} />}
            </div>
            <div>
              <LuListFilter size={18} className="text-gray-300" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mb-1 w-full">
            <div className="flex flex-row justify-start items-center space-x-2 ">
              <span className="font-bold text-2xl text-gray-800">{rejectedTaskCount}</span>
              <span className="font-semibold text-sm text-gray-400">REJECTED</span>
            </div>
            <div className="flex flex-row justify-start items-center space-x-2">
              <span className="font-bold text-2xl text-gray-800">{totalTaskCount}</span>
              <span className="font-semibold text-sm text-gray-400">TOTAL</span>
            </div>
          </div>
          <Line id={column.id} />
          <div className="space-y-4">
            {column.tasks.map((task: Task, index: number) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Column
