import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions"

const initialState = {
  myFavorites: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE: return {
      ...state,
      myFavorites: [...state.myFavorites, payload]
    }

    case REMOVE_FAVORITE: return {
      ...state,
      myFavorites: state.myFavorites.filter(e => e.id !== payload)
    }

    default: return { ...state }

  }
}

