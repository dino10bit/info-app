import axios from 'axios'

import {
  getStarshipFailure,
  getStarshipRequest,
  getStarshipSuccess,
} from '../actions/actionCreators'
import { fetchResources } from '../../utils/functions'
import { IStarship } from './interfaces/IStarship'

export function getStarship(id: string) {
  return async dispatch => {
    dispatch(getStarshipRequest())

    try {
      const starship: IStarship = (
        await axios.get(process.env.REACT_APP_SWAPI + `starships/${id}/`)
      ).data

      const resources = fetchResources([
        {
          resource: starship.pilots,
          name: 'name',
          resourceName: 'character',
        },
        {
          resource: starship.films,
          name: 'title',
          resourceName: 'film',
        },
      ])

      dispatch(
        getStarshipSuccess(
          starship,
          await resources.characterName,
          await resources.filmNames,
        ),
      )
    } catch (error) {
      dispatch(getStarshipFailure(error))
    }
  }
}
