import t from './actionTypes'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case t.SET_NOTIFICATIONS:
      return {
        ...state,
        loading: false,
        list: action.notifications
      }

    default:
      return state
  }
}
