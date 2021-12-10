import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from '../reducers/reducer'

export const initialState = {
  specie: null,
  starships: null,
  starship: null,
  planetNames: null,
  specieNames: null,
  starshipNames: null,
  vehicleNames: null,
  homeWorld: null,
  characters: null,
  character: null,
  films: null,
  film: null,
  vehicles: null,
  vehicle: null,
  filmNames: null,
  characterNames: null,
  isLoading: false,
  error: null,
  planet: null,
  planets: null,
  species: null,
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

// composeEnhancers allows to use redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
