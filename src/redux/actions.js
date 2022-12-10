export const ADD_FAVORITE = "ADD_PJ"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const ORDER_CARDS = "ORDER_CARDS"
export const FILTER_FAVORITES = "FILTER_FAVORITES"


export const addFavorite = (personaje) => {
  return {
    type: ADD_FAVORITE,
    payload: personaje
  }
}

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  }
}

export const filterFavorites = (gender) => {
  return {
    type: FILTER_FAVORITES,
    payload: gender
  }
}

export const orderCards = (id) => {
  return {
    type: ORDER_CARDS,
    payload: id
  }
}