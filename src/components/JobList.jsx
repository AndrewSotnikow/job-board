import { JobPosition } from './JobPosition'
import { useSelector, useDispatch } from 'react-redux'
import { selectVisiblePositions } from '../store/positions/positions-selectors'

import { selectFilters } from 'store/filter/filter-selectors'

import { addFilter } from 'store/filter/filter-actions'
const JobList = () => {
  const dispatch = useDispatch()
  const currentFilter = useSelector(selectFilters)
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilter)
  )

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
          onClick
        />
      ))}
    </div>
  )
}

export { JobList }
