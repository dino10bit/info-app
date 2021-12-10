import axios from 'axios'

import {
  getFilmFailure,
  getFilmRequest,
  getFilmSuccess,
} from '../actions/actionCreators'
import { fetchResources } from '../../utils/functions'
import { IFilm } from './interfaces/IFilm'

export function getFilm(id: string) {
  return async dispatch => {
    dispatch(getFilmRequest())

    try {
      const film: IFilm = (
        await axios.get(process.env.REACT_APP_SWAPI + `films/${id}/`)
      ).data

      const resources = fetchResources([
        {
          resource: film.characters,
          name: 'name',
          resourceName: 'character',
        },
        {
          resource: film.planets,
          name: 'name',
          resourceName: 'planet',
        },
        {
          resource: film.species,
          name: 'name',
          resourceName: 'specie',
        },
        {
          resource: film.starships,
          name: 'name',
          resourceName: 'starship',
        },
        {
          resource: film.vehicles,
          name: 'name',
          resourceName: 'vehicle',
        },
      ])

      dispatch(
        getFilmSuccess(
          film,
          await resources.characterName,
          await resources.planetNames,
          await resources.specieNames,
          await resources.starshipNames,
          await resources.vehicleNames,
        ),
      )
    } catch (error) {
      dispatch(getFilmFailure(error))
    }
  }
}
