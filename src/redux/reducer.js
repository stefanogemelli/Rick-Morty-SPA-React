import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE: return {
      ...state,
      myFavorites: [...state.myFavorites, payload],
      allCharacters: [...state.allCharacters, payload]
    }

    case REMOVE_FAVORITE: return {
      ...state,
      myFavorites: state.myFavorites.filter(e => e.id !== payload),
      allCharacters: state.allCharacters.filter(e => e.id !== payload)
    }

    case FILTER: return {
      ...state,
      myFavorites: [...state.allCharacters].filter(e => e.gender = payload)
    }

    case ORDER: return {
      ...state,
      myFavorites: [...state.myFavorites].sort((a, b) => payload === "Ascendente" ? a.id - b.id : b.id - a.id)
    }

    default: return { ...state }
  }
}

