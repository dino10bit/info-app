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
  GET_PLANETS_REQUEST,
  GET_PLANETS_SUCCESS,
  GET_PLANETS_FAILURE,
  GET_SPECIES_REQUEST,
  GET_SPECIES_FAILURE,
  GET_SPECIES_SUCCESS,
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIPS_FAILURE,
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_FAILURE,
} from './actionTypes'

export const getPeopleRequest = () => ({ type: GET_PEOPLES_REQUEST })

export const getPeopleSuccess = people => ({
  type: GET_PEOPLES_SUCCESS,
  payload: { people },
})

export const getPeopleFailure = error => ({
  type: GET_PEOPLES_FAILURE,
  payload: { error },
})

export const getFilmsRequest = () => ({ type: GET_FILMS_REQUEST })

export const getFilmsSuccess = films => ({
  type: GET_FILMS_SUCCESS,
  payload: { films },
})

export const getFilmsFailure = error => ({
  type: GET_FILMS_FAILURE,
  payload: { error },
})

export const getCharacterRequest = () => ({ type: GET_PEOPLE_REQUEST })

export const getCharacterSuccess = (
  character,
  homeWorld,
  filmNames,
  specieNames,
  starshipNames,
  vehicleNames,
) => ({
  type: GET_PEOPLE_SUCCESS,
  payload: {
    character,
    homeWorld,
    filmNames,
    specieNames,
    starshipNames,
    vehicleNames,
  },
})

export const getCharacterFailure = error => ({
  type: GET_PEOPLE_FAILURE,
  payload: { error },
})

export const getFilmRequest = () => ({ type: GET_FILM_REQUEST })

export const getFilmSuccess = (
  film,
  characterNames,
  planetNames,
  specieNames,
  starshipNames,
  vehiclesNames,
) => ({
  type: GET_FILM_SUCCESS,
  payload: {
    film,
    characterNames,
    planetNames,
    specieNames,
    starshipNames,
    vehiclesNames,
  },
})

export const getFilmFailure = error => ({
  type: GET_FILM_FAILURE,
  payload: { error },
})

export const getPlanetsRequest = () => ({ type: GET_PLANETS_REQUEST })
export const getPlanetsSuccess = planets => ({
  type: GET_PLANETS_SUCCESS,
  payload: { planets },
})

export const getPlanetsFailure = error => ({
  type: GET_PLANETS_FAILURE,
  payload: { error },
})

export const getPlanetRequest = () => ({ type: GET_PLANET_REQUEST })

export const getPlanetSuccess = (planet, characterNames, filmNames) => ({
  type: GET_PLANET_SUCCESS,
  payload: { planet, characterNames, filmNames },
})

export const getPlanetFailure = error => ({
  type: GET_PLANET_FAILURE,
  payload: { error },
})

export const getSpeciesRequest = () => ({ type: GET_SPECIES_REQUEST })
export const getSpeciesSuccess = species => ({
  type: GET_SPECIES_SUCCESS,
  payload: { species },
})

export const getSpeciesFailure = error => ({
  type: GET_SPECIES_FAILURE,
  payload: { error },
})

export const getSpecieRequest = () => ({ type: GET_SPECIE_REQUEST })

export const getSpecieSuccess = (
  specie,
  characterNames,
  filmNames,
  homeWorld,
) => ({
  type: GET_SPECIE_SUCCESS,
  payload: { specie, characterNames, filmNames, homeWorld },
})

export const getSpecieFailure = error => ({
  type: GET_SPECIE_FAILURE,
  payload: { error },
})

export const getStarshipsRequest = () => ({ type: GET_STARSHIPS_REQUEST })
export const getStarshipsSuccess = starships => ({
  type: GET_STARSHIPS_SUCCESS,
  payload: { starships },
})

export const getStarshipsFailure = error => ({
  type: GET_STARSHIPS_FAILURE,
  payload: { error },
})

export const getStarshipRequest = () => ({ type: GET_STARSHIP_REQUEST })

export const getStarshipSuccess = (starship, characterNames, filmNames) => ({
  type: GET_STARSHIP_SUCCESS,
  payload: { starship, characterNames, filmNames },
})

export const getStarshipFailure = error => ({
  type: GET_STARSHIP_FAILURE,
  payload: { error },
})

export const getVehiclesRequest = () => ({ type: GET_VEHICLES_REQUEST })
export const getVehiclesSuccess = vehicles => ({
  type: GET_VEHICLES_SUCCESS,
  payload: { vehicles },
})

export const getVehiclesFailure = error => ({
  type: GET_VEHICLES_FAILURE,
  payload: { error },
})

export const getVehicleRequest = () => ({ type: GET_VEHICLE_REQUEST })

export const getVehicleSuccess = (vehicle, characterNames, filmNames) => ({
  type: GET_VEHICLE_SUCCESS,
  payload: { vehicle, characterNames, filmNames },
})

export const getVehicleFailure = error => ({
  type: GET_VEHICLE_FAILURE,
  payload: { error },
})
