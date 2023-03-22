import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'
import { useSelector, useDispatch } from 'react-redux'

import { selectFilters } from 'store/filter/filter-selectors'
import { removeFilter, clearFilter } from 'store/filter/filter-actions'

const FilterPanel = () => {
  const currentFilter = useSelector(selectFilters)
  const dispatch = useDispatch()
  if (currentFilter.length === 0) return null
  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilter.map((filter) => (
            <Badge key={filter} variant='clearable'
            onClear={()=> dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  )
}

export { FilterPanel }
