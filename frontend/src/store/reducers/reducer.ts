import { initialState } from '../store/store'

import {
  GET_PEOPLES_REQUEST,
  GET_PEOPLES_SUCCESS,
  GET_PEOPLES_FAILURE,
  GET_FILMS_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_FAILURE,
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAILURE,
  GET_PLANET_REQUEST,
  GET_PLANET_SUCCESS,
  GET_PLANET_FAILURE,
  GET_SPECIE_REQUEST,
  GET_SPECIE_SUCCESS,
  GET_SPECIE_FAILURE,
  GET_STARSHIP_REQUEST,
  GET_STARSHIP_SUCCESS,
  GET_STARSHIP_FAILURE,
  GET_VEHICLE_REQUEST,
  GET_VEHICLE_SUCCESS,
  GET_VEHICLE_FAILURE,
  GET_SPECIES_REQUEST,
  GET_SPECIES_SUCCESS,
  GET_SPECIES_FAILURE,
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIPS_FAILURE,
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_FAILURE,
} from '../actions/actionTypes'

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_PEOPLES_SUCCESS: {
      const { people } = action.payload

      return {
        ...state,
        people,
        isLoading: false,
      }
    }

    case GET_PEOPLES_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_FILMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_FILMS_SUCCESS: {
      const { films } = action.payload

      return {
        ...state,
        films,
        isLoading: false,
      }
    }

    case GET_FILMS_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_PEOPLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_PEOPLE_SUCCESS: {
      const {
        character,
        homeWorld,
        filmNames,
        specieNames,
        starshipNames,
        vehicleNames,
      } = action.payload

      return {
        ...state,
        character,
        homeWorld,
        filmNames,
        specieNames,
        starshipNames,
        vehicleNames,
        isLoading: false,
      }
    }

    case GET_PEOPLE_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_FILM_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_FILM_SUCCESS: {
      const {
        film,
        characterNames,
        planetNames,
        specieNames,
        starshipNames,
        vehicleNames,
      } = action.payload

      return {
        ...state,
        film,
        characterNames,
        planetNames,
        specieNames,
        starshipNames,
        vehicleNames,
        isLoading: false,
      }
    }

    case GET_FILM_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_PLANETS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_PLANETS_SUCCESS: {
      const { planets } = action.payload

      return {
        ...state,
        planets,
        isLoading: false,
      }
    }

    case GET_PLANETS_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_PLANET_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_PLANET_SUCCESS: {
      const { planet, characterNames, filmNames } = action.payload

      return {
        ...state,
        planet,
        characterNames,
        filmNames,
        isLoading: false,
      }
    }

    case GET_PLANET_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_SPECIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_SPECIES_SUCCESS: {
      const { species } = action.payload

      return {
        ...state,
        species,
        isLoading: false,
      }
    }

    case GET_SPECIES_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_SPECIE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_SPECIE_SUCCESS: {
      const { specie, characterNames, filmNames, homeWorld } = action.payload

      return {
        ...state,
        specie,
        characterNames,
        filmNames,
        homeWorld,
        isLoading: false,
      }
    }

    case GET_SPECIE_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_STARSHIPS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_STARSHIPS_SUCCESS: {
      const { starships } = action.payload

      return {
        ...state,
        starships,
        isLoading: false,
      }
    }

    case GET_STARSHIPS_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_STARSHIP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_STARSHIP_SUCCESS: {
      const { starship, characterNames, filmNames } = action.payload

      return {
        ...state,
        starship,
        characterNames,
        filmNames,
        isLoading: false,
      }
    }

    case GET_STARSHIP_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_VEHICLES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_VEHICLES_SUCCESS: {
      const { vehicles } = action.payload

      return {
        ...state,
        vehicles,
        isLoading: false,
      }
    }

    case GET_VEHICLES_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    case GET_VEHICLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_VEHICLE_SUCCESS: {
      const { vehicle, characterNames, filmNames } = action.payload

      return {
        ...state,
        vehicle,
        characterNames,
        filmNames,
        isLoading: false,
      }
    }

    case GET_VEHICLE_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
        isLoading: false,
      }
    }

    default: {
      return state
    }
  }
}
