import reduce from 'lodash/reduce'
import {
  RECEIVE_DATASOURCES,
  ASSIGN_INTERVAL_ID,
  RECEIVE_REST_DATA
} from '../constants'

export const dataReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case RECEIVE_DATASOURCES:
      // Add a data property to each datasource so that widgets can subscribe
      // to them.
      const datasources = reduce(action.datasources, (acc, datasource) => {
        const datasourceCopy = { ...datasource, data: {} }
        acc[datasource.id] = datasourceCopy
        return acc
      }, {})
      return { ...state, ...datasources }
    case RECEIVE_REST_DATA:
      return {
        ...state,
        [action.datasourceId]: {
          ...state[action.datasourceId],
          data: action.data
        }
      }
    case ASSIGN_INTERVAL_ID:
      return {
        ...state,
        [action.datasourceId]: {
          ...state[action.datasourceId],
          intervalId: action.intervalId
        }
      }
    default:
      return state
  }
}
