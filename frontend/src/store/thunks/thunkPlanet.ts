import axios from 'axios'

import {
  getPlanetFailure,
  getPlanetRequest,
  getPlanetSuccess,
} from '../actions/actionCreators'
import { fetchResources } from '../../utils/functions'
import { IPlanet } from './interfaces/IPlanet'

export function getPlanet(id: string) {
  return async dispatch => {
    dispatch(getPlanetRequest())

    try {
      const planet: IPlanet = (
        await axios.get(process.env.REACT_APP_SWAPI + `planets/${id}/`)
      ).data

      const resources = fetchResources([
        {
          resource: planet.residents,
          name: 'name',
          resourceName: 'character',
        },
        {
          resource: planet.films,
          name: 'title',
          resourceName: 'film',
        },
      ])

      dispatch(
        getPlanetSuccess(
          planet,
          await resources.characterName,
          await resources.filmNames,
        ),
      )
    } catch (error) {
      dispatch(getPlanetFailure(error))
    }
  }
}
