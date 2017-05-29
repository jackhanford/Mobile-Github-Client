import t from './actionTypes'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case t.SET_TIMELINE:
      return {
        ...state,
        loading: false,
        list: action.timeline
      }

    default:
      return state
  }
}
