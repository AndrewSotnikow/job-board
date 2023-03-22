export const ADD_FILTER = 'ADD_FILTERS'
export const REMOVE_FILTER = 'REMOVE_FILTERS'
export const CLEAR_FILTER = 'CLEAR_FILTERS'

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
})

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
})
export const clearFilter = {
  type: CLEAR_FILTER,
}
