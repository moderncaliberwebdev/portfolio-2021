import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import axios from 'axios'

export const actions = () => async (dispatch) => {
  const { data } = await axios.get('/api')

  dispatch({
    type: 'GET_TITLE',
    payload: data.title,
  })
}

const actionReducer = (state = { title: '' }, action) => {
  switch (action.type) {
    case 'GET_TITLE':
      return { title: action.payload }

    default:
      return state
  }
}

const reducer = combineReducers({
  action: actionReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
