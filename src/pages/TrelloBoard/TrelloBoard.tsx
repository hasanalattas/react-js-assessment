import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'slices/rootReducer'
import { updateBoardState } from 'slices/board/boardSlice'
import Column from './Column'

const TrelloBoard: React.FC = () => {
  const dispatch = useDispatch()
  const columns = useSelector((state: RootState) => state.board.columns)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    const sourceColumnIndex = columns.findIndex((column) => column.id === source.droppableId)
    const destColumnIndex = columns.findIndex((column) => column.id === destination.droppableId)

    const sourceColumn = columns[sourceColumnIndex]
    const destColumn = columns[destColumnIndex]

    const sourceTasks = Array.from(sourceColumn.tasks)
    const [movedTask] = sourceTasks.splice(source.index, 1)

    const newColumns = Array.from(columns)

    if (source.droppableId === destination.droppableId) {
      // moving within the same column
      sourceTasks.splice(destination.index, 0, movedTask)
      newColumns[sourceColumnIndex] = {
        ...sourceColumn,
        tasks: sourceTasks
      }
    } else {
      // moving to a different column
      const destTasks = Array.from(destColumn.tasks)
      destTasks.splice(destination.index, 0, movedTask)

      newColumns[sourceColumnIndex] = {
        ...sourceColumn,
        tasks: sourceTasks
      }

      newColumns[destColumnIndex] = {
        ...destColumn,
        tasks: destTasks
      }
    }

    dispatch(updateBoardState({ columns: newColumns }))
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </DragDropContext>
    </div>
  )
}

export default TrelloBoard
